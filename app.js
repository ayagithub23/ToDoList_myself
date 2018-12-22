// $("#inputArea button").on("click",function(){
//     alert("點我Button");
// });
// $("#inputArea input[type='button']").on("click",function(){
//     alert("點我InputButton");
// });
// $("#inputArea input[type='submit']").on("click",function(){
//     alert("點我InputSubmit");
// });

// [2018-12-22] 01. 設一個物件，為了要印在HTML上。
var todoData = [
    {
        content: "吃午餐",
        createdAt: 1
    },
    {
        content: "吃晚餐",
        createdAt: 1000
    }
];
console.log(todoData);
function render(todoData){
    moment.locale('zh-tw');
    // [2018-12-22] 02. 測試抓取物件是否真的印在ul li上。

    // $("ul").append(`<li>${todoData[0].content}  ${moment().format('llll')}</li>`);
    // for(var i = 0; i<= todoData.length; i++){
    //     $("ul").append(`<li>${todoData[i].content} ${moment().format('llll')}</li>`);
    // }
    // 要問JOHN為什麼要這樣輸入HTML UL
      var HTML = "";
      var $ul = $("ul");
    // [2018-12-22] 04. 建立迴圈，因為寫成i<=todoData.length，導致找不到資料，會出問題
    // [2018-12-22] app.js:32 Uncaught TypeError: Cannot read property 'content' of undefined at render
    for(var i = 0; i < todoData.length; i++){
        // [2018-12-22] 如果輸入i變數的情況下
        // [2018-12-22] app.js:32 Uncaught TypeError: Cannot read property 'content' of undefined at render
        // [2018-12-22] 04. 其實我也可以這樣做
        // $("ul").append(`<li><span class="delete"><button>刪除</button></span>${todoData[i].content} ${moment().format('llll')}</li>`);
        // [2018-12-22] X錯誤 [2018-12-22] 04. 如果加了兩個點點"delete"按鈕樣式會不見。
        HTML = HTML +
        `<li><span class="delete"><button>刪除</button></span>
        ${todoData[i].content}
        ${moment().format('llll')}
        </li>`
        // [2018-12-22] 不懂 CREATEAT ${moment(todoData[i].createdAt).format("MM/DD hh:mm")}
    };
     $ul.append(HTML);
}
render(todoData);



$("#addTodoBtn").on("click",function(){
    // alert("點我Button");
    // preventDefault() 方法阻止元素發生默認的行為（例如，當點擊提交按鈕時阻止對表單的提交）。
    // https://goo.gl/uAWuJS
    // 阻止li消失的狀況，所以加上event.preventDefault();
    event.preventDefault();
    // 從jquery抓出來的東西加個$字號
    var $addTodoInput = $("#addTodoInput");
    // var str = "       Hello World!        ";
    // alert(str.trim());
    // 修剪（）方法從字符串的兩側去除空格。
    // string.trim()
    // https://www.w3schools.com/jsref/jsref_trim_string.asp
    var newTodoText = $addTodoInput.val().trim();
    // console.log("測試input是否真的有值出現" + $("#addTodoInput").val());
    // 中文化
    moment.locale('zh-tw');
    // [2018-12-22] 05. 如果沒在 addTodoInput 輸入資料的話，那就不會出現LI，順序很重要，不能夠再APPEND下面，否則這功能會失效。
    if(!newTodoText) return;



    // [2018-12-22] 06. 使用者資料存進新的物件(建立新的物件)

    var newTodoData = {
        // newTodoText 輸入得值
        content: newTodoText,
        createdAt: moment().valueOf()
    };
     
    // [2018-12-22] 06. 如果我不想用push的方式，而是建立一支新物件，我該怎麼做。
    // var newTodoData = {
    //     content: newTodoText,
    //     createdAt: moment().valueOf()
    // };
    // $("ul").append(`<li><span class="delete"><button>刪除</button></span>
    // ${newTodoData.content} 
    // ${moment().format('llll')}
    // </li>`);
    // console.log(newTodoData);

    // [2018-12-22] 07. 新的物件陣列，push進todoData
    todoData.push(newTodoData);
    // [2018-12-22] 08. 執行函數，這樣才會在HTML上出現
    render(todoData);
    //  $("ul").append(`<li>${newTodoText} ${moment().format('llll')}</li>`);



 
    $addTodoInput.val("");
});
// https://momentjs.com/
// moment().format('MMMM Do YYYY, h:mm:ss a');


// [2018-12-22] 03. 新增刪除按鈕 
$("ul").on("click", ".delete", function(){
    $(this).parent("li").remove();
});

