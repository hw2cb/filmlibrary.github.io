let arrayFilms = new Array();

function Film (
    name,
    country,
    genre,
    director,
    scenario,  
    producer,
    operator,
    composer,
    money,
    rate,
    length,
    date,
    budget
){
    this.name = name;
    this.country = country;
    this.genre = genre;
    this.director = director;
    this.scenario = scenario;
    this.producer = producer;
    this.operator = operator;
    this.composer = composer;
    this.money = money;
    this.rate = rate;
    this.length = length;
    this.date = date;
    this.budget = budget;
}
let count = 0; //отсчитываем сколько фильмов добавил пользователь

function showAddFilms()
{
    document.getElementById("show-add-films").style.display = "block";
    document.getElementById("btn-add-now").style.display = "none";
}

function setContent(headFilm)
{
    document.getElementById("name-film-id"+(count-1)).innerHTML= 'Название фильма: '+headFilm.name;
    
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+11).innerHTML = 'Страна: '+ headFilm.country;
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+10).innerHTML = 'Жанр: ' + headFilm.genre;
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+9).innerHTML = 'Режиссер: ' +headFilm.director;
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+8).innerHTML = 'Сценарий: ' +headFilm.scenario;
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+7).innerHTML = 'Продюсер: ' +headFilm.producer;
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+6).innerHTML = 'Оператор: ' +headFilm.operator;
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+5).innerHTML = 'Композитор: ' +headFilm.composer;
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+4).innerHTML = 'Мировые сборы: ' +headFilm.money + ' рублей';
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+3).innerHTML = 'Рейтинг: ' +headFilm.rate + '+';
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+2).innerHTML = 'Длительность: ' +headFilm.length + ' минут';
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+1).innerHTML = 'Дата выхода: ' +headFilm.date;
    document.getElementById("info-films-id"+"-"+(count-1)+ "-li-"+0).innerHTML = 'Бюджет: ' +headFilm.budget + ' рублей';     
}
function createBlock()
{
     //добавление главного блок film
    var Divfilm = document.createElement("div");
    Divfilm.id = "film-" +count;
    Divfilm.className = "film";
    par = document.getElementById('before'); 
    par.insertBefore(Divfilm, par.firstChild);


    //добавление блока с именем
    var nameFilm = document.createElement("div");
    nameFilm.id = "name-film-id"+count;
    nameFilm.className = "name-film";
    beforeFilm = document.getElementById("film-"+ count);
    beforeFilm.insertBefore(nameFilm, beforeFilm.firstChild);
    
    

    //добавление блока с пунктами
    var infoFilm = document.createElement("ul");
    infoFilm.id = "info-films-id"+count;
    infoFilm.className = "info-films";
    beforeNameFilm = document.getElementById("film-"+ count);
    beforeNameFilm.insertBefore(infoFilm, beforeNameFilm.lastChild);

    //кнопка удалить фильм
    var buttonDelete = document.createElement("a");
    buttonDelete.id = "delete-button-id-"+count;
    buttonDelete.className = "delete-button";
    beforeNameFilm.insertBefore(buttonDelete, beforeNameFilm.lastChild);
    document.getElementById("delete-button-id-"+count).innerHTML = "Удалить";
    document.getElementById("delete-button-id-"+count).href = "#";
    var elem = document.getElementById("delete-button-id-"+count);
    elem.onclick = function() { deleteFilm(count-1)};
    
    console.log("deleteFilm:createBlock " + count);

//добавление самих пунктов
    for(let i=0; i<12; i++)
    {
        var pointFilm = document.createElement("li");
        pointFilm.id = "info-films-id"+"-"+ count+ "-li-"+i;
        beforeInfoFilmLi = document.getElementById("info-films-id"+count);
        beforeInfoFilmLi.insertBefore(pointFilm, beforeInfoFilmLi.firstChild);
    }
    count++;
}

function createFilm()
{
   
    if(document.getElementById("name-film").value.length == 0)
    {

    }
    else
    {
        if(checkedValidationBudget() & checkedValidationMoney() & checkedValidationRate() & checkedValidationLength() & checkedValidationEmpty())
        {
            let headFilm = new Film(
                document.getElementById("name-film").value,
                document.getElementById("country").value,
                document.getElementById("genre").value,
                document.getElementById("director").value,
                document.getElementById("scenario").value,
                document.getElementById("producer").value,
                document.getElementById("operator").value,
                document.getElementById("composer").value,
                document.getElementById("money").value,
                document.getElementById("rate").value,
                document.getElementById("length").value,
                document.getElementById("date").value,
                document.getElementById("budget").value
            );
            
            //head= (localStorage.getItem('film'+count));
            localStorage.setItem('headFilm-'+count, JSON.stringify(headFilm));
            
            localStorage.setItem('count', count); 
            console.log("createFilm:"+count); 
            createBlock();
            setContent(headFilm);
            document.getElementById("show-add-films").style.display = "none";
            document.getElementById("btn-add-now").style.display = "inline";

            document.getElementById("name-film").value = "";
            document.getElementById("country").value= "";
            document.getElementById("genre").value= "";
            document.getElementById("director").value= "";
            document.getElementById("scenario").value= "";
            document.getElementById("producer").value= "";
            document.getElementById("operator").value= "";
            document.getElementById("composer").value= "";
            document.getElementById("money").value= "";
            document.getElementById("rate").value= "";
            document.getElementById("length").value= "";
            document.getElementById("date").value= "";
            document.getElementById("budget").value= "";
        } 
    }
};

window.onload = function ()
{
    let s =(localStorage.getItem('count'));

    if(s != null)
    {
        s = Number(s);

        count = s+1;
        //localStorage.clear();
        let c = 0;
        for(let i=0; i<=s; i++)
        {
            arrayFilms[i] = JSON.parse(localStorage.getItem('headFilm-'+i));

            /*if(JSON.parse(localStorage.getItem('headFilm-'+i))!= null)
            {
                arrayFilms[c] = JSON.parse(localStorage.getItem('headFilm-'+i));
                console.log(arrayFilms[c]);
                c++;
            }*/
        }
        console.log(arrayFilms);
        loadFilms();
    }
    else{
        console.log("Еще не добавлены фильмы")
    }
}
function loadFilms()
{
    //здесь по count создавать и заполнять блоки
    for(let i=0; i<count; i++)
    {
        if(arrayFilms[i] != null)
        {
                        //добавление главного блок film
            var Divfilm = document.createElement("div");
            Divfilm.id = "film-" +i;
            Divfilm.className = "film";
            par = document.getElementById('before'); 
            par.insertBefore(Divfilm, par.firstChild);
        
        
            //добавление блока с именем
            var nameFilm = document.createElement("div");
            nameFilm.id = "name-film-id"+i;
            nameFilm.className = "name-film";
            beforeFilm = document.getElementById("film-"+ i);
            beforeFilm.insertBefore(nameFilm, beforeFilm.firstChild);
        
            //добавление блока с пунктами
            var infoFilm = document.createElement("ul");
            infoFilm.id = "info-films-id"+i;
            infoFilm.className = "info-films";
            beforeNameFilm = document.getElementById("film-"+ i);
            beforeNameFilm.insertBefore(infoFilm, beforeNameFilm.lastChild);

                //кнопка удалить фильм
            var buttonDelete = document.createElement("a");
            buttonDelete.id = "delete-button-id-"+i;
            buttonDelete.className = "delete-button";
            beforeNameFilm.insertBefore(buttonDelete, beforeNameFilm.lastChild);
            document.getElementById("delete-button-id-"+i).innerHTML = "Удалить";
            document.getElementById("delete-button-id-"+i).href = "#";
            document.getElementById("delete-button-id-"+i).onclick = function() { deleteFilm(i)};
            console.log("Загрузка фильма " + i);

            //добавление самих пунктов
            for(let j=0; j<12; j++)
            {
                var pointFilm = document.createElement("li");
                pointFilm.id = "info-films-id"+"-"+ i+ "-li-"+j;
                beforeInfoFilmLi = document.getElementById("info-films-id"+i);
                beforeInfoFilmLi.insertBefore(pointFilm, beforeInfoFilmLi.firstChild);
            }


            document.getElementById("name-film-id"+(i)).innerHTML= 'Название фильма: ' + arrayFilms[i].name;
            
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+11).innerHTML = 'Страна: '+ arrayFilms[i].country;
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+10).innerHTML = 'Жанр: ' + arrayFilms[i].genre;
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+9).innerHTML = 'Режиссер: ' +arrayFilms[i].director;
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+8).innerHTML = 'Сценарий: ' +arrayFilms[i].scenario;
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+7).innerHTML = 'Продюсер: ' +arrayFilms[i].producer;
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+6).innerHTML = 'Оператор: ' +arrayFilms[i].operator;
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+5).innerHTML = 'Композитор: ' +arrayFilms[i].composer;
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+4).innerHTML = 'Мировые сборы: ' +arrayFilms[i].money + ' рублей';
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+3).innerHTML = 'Рейтинг: ' +arrayFilms[i].rate + '+';
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+2).innerHTML = 'Длительность: ' +arrayFilms[i].length + ' минут';
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+1).innerHTML = 'Дата выхода: ' +arrayFilms[i].date;
            document.getElementById("info-films-id"+"-"+(i)+ "-li-"+0).innerHTML = 'Бюджет: ' +arrayFilms[i].budget + ' рублей';

        console.log("каунт: "+count);
        }
    }
        
}
function deleteFilm(sch)
{
    sch = Number(sch);
    console.log("deleteFilm " + sch);
    count--;
    localStorage.setItem('count', count);
    localStorage.removeItem("headFilm-"+sch);
    document.getElementById("film-"+sch).remove();
};
