/**
 * 目标1：渲染图书列表
 *  1.1 获取数据
 *  1.2 渲染数据
 */
const creator = "小游";
// 封装渲染函数
function render() {
  // 1.1 获取数据
  axios({
    url: "http://hmajax.itheima.net/api/books",
    params: {
      // 外号：获取对应数据
      creator: creator,
    },
  }).then((result) => {
    console.log(result);
    const bookList = result.data.data;
    console.log(bookList);
    // 1.2渲染数据
    const list = bookList
      .map((item, index) => {
        const { bookname, author, publisher, id } = item;
        return `<tr>
      <td>${index + 1}</td>
      <td>${bookname}</td>
      <td>${author}</td>
      <td>${publisher}</td>
      <td data-id=${id}>
        <span class="del">删除</span>
        <span class="edit">编辑</span>
      </td>
    </tr>`;
      })
      .join("");
    document.querySelector(".list").innerHTML = list;
  });
}
// 渲染数据
render();
/**
 *目标2：新增图书
 *2.1新增弹框->显示和隐藏
 *2.2收集表单数据，并提交到服务器保存
 *2.3刷新图书列表
 */
//2.1创建弹框对象
const addModalDom = document.querySelector(".add-modal");
const addModal = new bootstrap.Modal(addModalDom);
// 保存按钮-点击-提交数据-隐藏弹框
document.querySelector(".add-btn").addEventListener("click", () => {
  // 2.2收集表单数据，并提交到服务器保存
  const addForm = document.querySelector(".add-form");
  const addData = serialize(addForm, { hash: true, empty: true });
  console.log(addData);
  // 提交到服务器
  axios({
    url: "http://hmajax.itheima.net/api/books",
    method: "post",
    data: {
      ...addData,
      creator,
    },
  }).then((result) => {
    console.log(result);
    // 2.3添加成功后，重新请求并渲染图书列表
    render();
    // 重置表单
    addForm.reset();
    // 隐藏表单
    addModal.hide();
  });
});

/**
 * 目标3：删除图书
 *  3.1 删除元素绑定点击事件->获取图书id
 *  3.2 调用删除接口
 *  3.3 刷新图书列表
 */
// 3.1 删除元素->点击（事件委托）
document.querySelector(".list").addEventListener("click", (e) => {
  if (e.target.classList.contains("del")) {
    // console.log("112");
    // 获取图书id
    const bookId = e.target.parentNode.dataset.id;
    // 3.2调用删除接口
    axios({
      url: `https://hmajax.itheima.net/api/books/${bookId}`,
      method: "DELETE",
    }).then(() => {
      // 重新渲染
      render();
    });
  }
});

// 目标4：编辑图书信息

// 4.1编辑弹框，显示和隐藏
const editDom = document.querySelector(".edit-modal");
const editModal = new bootstrap.Modal(editDom);
// 添加事件委托，点击事件
document.querySelector(".list").addEventListener("click", (e) => {
  if (e.target.classList.contains("edit")) {
    // 4.2 获取当前编辑图书数据->回显到编辑表单中
    const bookId = e.target.parentNode.dataset.id;
    // console.log(bookId);
    axios({
      url: `https://hmajax.itheima.net/api/books/${bookId}`,
    }).then((result) => {
      const bookObj = result.data.data;
      // 解构
      // const { bookname, author, publisher } = bookObj;
      //document.querySelector(".edit-form .bookname").value = bookname;
      //document.querySelector(".edit-form .author").value = author;
      //document.querySelector(".edit-form .publisher").value = publisher;
      // 数据对象“属性”和标签“类名”一致
      // 遍历数据对象，使用属性去获取对应的标签，
      // 快速赋值
      const keys = Object.keys(bookObj);
      keys.forEach((key) => {
        // console.log(key);
        document.querySelector(`.edit-form .${key}`).value = bookObj[key];
      });
    });
    // 显示弹框
    editModal.show();
  }
});
// 4.3点击修改按钮，隐藏弹框，渲染数据
document.querySelector(".edit-btn").addEventListener("click", () => {
  // 4.3提交保存修改。并刷新列表
  const editForm = document.querySelector(".edit-form");
  // 解构
  const { id, bookname, author, publisher } = serialize(editForm, {
    hash: true,
    empty: true,
  });
  // 服务器请求
  axios({
    url: `https://hmajax.itheima.net/api/books/${id}`,
    method: "PUT",
    data: {
      bookname,
      author,
      publisher,
      creator,
    },
  }).then(() => {
    // 修改成功后重新渲染数据
    render();
    // 隐藏弹框
    editModal.hide();
  });
});
