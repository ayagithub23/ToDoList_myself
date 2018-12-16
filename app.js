// $("#inputArea button").on("click",function(){
//     alert("點我Button");
// });
// $("#inputArea input[type='button']").on("click",function(){
//     alert("點我InputButton");
// });
// $("#inputArea input[type='submit']").on("click",function(){
//     alert("點我InputSubmit");
// });

$("#addTodoBtn").on("click",function(){
    // alert("點我Button");
    // preventDefault() 方法阻止元素發生默認的行為（例如，當點擊提交按鈕時阻止對表單的提交）。
    // https://goo.gl/uAWuJS
    // 阻止li消失的狀況，所以加上event.preventDefault();
    event.preventDefault();
    // 從jquery抓出來的東西加個$字號
    var $addTodoInput = $("#addTodoInput");
    var newTodoText = $addTodoInput.val();
    // console.log("測試input是否真的有值出現" + $("#addTodoInput").val());
    // 中文化
    moment.locale('zh-tw');
    $("ul").append(`<li>${newTodoText} ${moment().format('llll')}</li>`);
    $addTodoInput.val("");
});
// https://momentjs.com/
// moment().format('MMMM Do YYYY, h:mm:ss a');