/**
 * Created by Yura on 27.02.2017.
 */
;(function () {

//створення основного місця роботи the main place of work
        document.querySelector("#homeTask2>input").addEventListener("click", function () {
            if (!document.querySelector(".homeTask")) {
                let article = document.createElement("article"),
                    section1 = document.createElement("section"),
                    section2 = document.createElement("section"),
                    section3 = document.createElement("section"),
                    section4 = document.createElement("section");
                article.classList.add("content");
                article.classList.add("homeTask");
                section1.id = "list";
                section1.innerHTML = "<ul><li>Петро</li><li>Василь</li><li>Юрко</li><li>Дмитро</li><li>Ігор</li><li>Іван</li></ul>";
                let array = [section1,section2,section3,section4];
                array.forEach(function (x) {
                    x.classList.add("sort");
                    article.appendChild(x)
                });
                section2.style.backgroundColor="white";
                section3.innerHTML="<form name='sort' id='sort'>"+"<input type='button' value='sort1'>"+"<input type='button' value='sort2'>"+"<input type='button' value='sort3'>"+ "<input type='button' value='sort4'>" + "<input type='button' value='sort5'>" +" </form>";
                console.log(article);
                article.querySelector("#sort").addEventListener("click", sort);
                    document.getElementById("main").appendChild(article);

            }});



// sort functions and support functions ( функції сортування та допоміжні функції)
        function sort() {
            let target = event.target,
                list = Array.prototype.slice.call(document.querySelectorAll("#list li")),
                array = list.map(function (x) {
                    return x.textContent;
                }),
                placeForFunction = document.querySelector(".homeTask").lastChild;

            if(this){
                switch (target.getAttribute("value")){
                    case "sort1": typeResult(sort1(array)) ;
                    placeForFunction.innerHTML = sort1;
                        break;
                    case "sort2": typeResult(sort2(array));
                        placeForFunction.innerHTML = sort2;
                        break;
                    case "sort3": typeResult(sort3(array));
                        placeForFunction.innerHTML = sort3;
                        break;
                    case "sort4": typeResult(sort4(array));
                        placeForFunction.innerHTML = sort4;
                        break;
                    case "sort5": typeResult(sort5(array));
                        placeForFunction.innerHTML = sort5;
                        break;
                }

            }}
            function sort1(array) {
             return   array.reverse();
            }
            function sort2(array) {
                return   array.sort()
            }
            function sort3(array) {
                return   array.sort(function (a, b) {
                    return a > b;
                })
            }
            function sort4(array) {
                return   array.sort(function (a ,b) {
                    return a - b;
                })
            }
            function sort5(array) {
                for (let i = array.length -1 ; i > 0; i--) {
                    let j = Math.floor(Math.random() * (i + 1));
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
                return array;
            }
// show result (друкування результату)
            function typeResult(result) {
                let len = result.length,
                    list = "<ul>";
                for(let i = 0; i < len; i+=1){
                    list=  list + "<li>" + result[i] + "</li>";
                }
                console.log(list);
                document.querySelector("#list").nextSibling.innerHTML = (list + "</ul>");
            }



})();
