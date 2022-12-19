class main{
    constructor(){
       
    }
    AddSixRandomNumber(list, CombinationNumber){
        if(CombinationNumber > 30){
            list = [];
            CombinationNumber = 0;
            alert('You can only create a maximum of 30 combinations at a time!');
            throw new Error("Something went wrong!");
        }
        else {
            let SetOfLists =[];
            let num;

            for(let a=0; a<CombinationNumber; a++){
                for(let i=0; i<6;){
                    num = Math.floor(Math.random()*60)+1;
                    if (!list.includes(num)){
                        list.push(num);
                        i++;
                    }
                    else {
                        while(list.includes(num)){
                            num = Math.floor(Math.random()*60)+1;
                            if (!list.includes(num)){
                                list.push(num);
                                i++;
                                break;
                            }
                        }          
                    }   
                }
                list.sort(function(a,b){return a - b;});
                if (list.length > 6 || list.length < 6){
                    console.log("An error ocurred. Please contact your administrator.");
                }
            
                SetOfLists.push(list);
                list = [];
            }

            return SetOfLists;
            
        }
        
    }

    ClearList(list){
        list = [];
        return this.list = list;
    }

    ClearInputField(list){
        list = [];
        const InputValue = document.getElementById('combination-number');
        InputValue.value = "";
        return this.list = list;
    }

    ClearListButton(list){
        let listElement = document.getElementById('mainList');
        let listElement2 = document.getElementById('mainList2');
        let listElement3 = document.getElementById('mainList3');
        listElement.innerText = ""
        listElement2.innerText = ""
        listElement3.innerText = ""
        list = [];
        return this.list = list;   
    }

}

let objectList = new main();
let list1 = [];
let Audit = [];
let CombinationNumber;
let Play = false;

const playButton = document.getElementById('create-numbers');
const clearButton = document.getElementById('clear-numbers');
const InputValue = document.getElementById('combination-number');

playButton.addEventListener('click', ()=>{
    if (Play == false){
        Play = true;
        let SetOfLists = [];
        CombinationNumber = InputValue.value;
        SetOfLists = objectList.AddSixRandomNumber(list1, CombinationNumber);
        
    
        for(let i=0; i<CombinationNumber; i++){
            if (i <10){
                li = document.createElement("li");
                li.innerText = SetOfLists[i];
                document.getElementById("mainList").appendChild(li);
                Audit.push(SetOfLists[i]);
                hr = document.createElement("hr");
                document.getElementById("mainList").appendChild(hr);
            }
            else if (i>=10 && i<20){
                li = document.createElement("li");
                li.innerText = SetOfLists[i];
                document.getElementById("mainList2").appendChild(li);
                Audit.push(SetOfLists[i]);
                hr = document.createElement("hr");
                document.getElementById("mainList2").appendChild(hr);
    
            }
            else if (i>=20 && i<=30){
                li = document.createElement("li");
                li.innerText = SetOfLists[i];
                document.getElementById("mainList3").appendChild(li);
                Audit.push(SetOfLists[i]);
                hr = document.createElement("hr");
                document.getElementById("mainList3").appendChild(hr);
            }
        }
        list1 = objectList.ClearList();
        console.log(SetOfLists);
    } else {
        list1 = objectList.ClearListButton();
        let SetOfLists = [];
        CombinationNumber = InputValue.value;
        SetOfLists = objectList.AddSixRandomNumber(list1, CombinationNumber);
        
    
        for(let i=0; i<CombinationNumber; i++){
            if (i <10){
                li = document.createElement("li");
                li.innerText = SetOfLists[i];
                document.getElementById("mainList").appendChild(li);
                Audit.push(SetOfLists[i]);
                hr = document.createElement("hr");
                document.getElementById("mainList").appendChild(hr);
            }
            else if (i>=10 && i<20){
                li = document.createElement("li");
                li.innerText = SetOfLists[i];
                document.getElementById("mainList2").appendChild(li);
                Audit.push(SetOfLists[i]);
                hr = document.createElement("hr");
                document.getElementById("mainList2").appendChild(hr);
    
            }
            else if (i>=20 && i<=30){
                li = document.createElement("li");
                li.innerText = SetOfLists[i];
                document.getElementById("mainList3").appendChild(li);
                Audit.push(SetOfLists[i]);
                hr = document.createElement("hr");
                document.getElementById("mainList3").appendChild(hr);
            }
        }
        list1 = objectList.ClearList();
        console.log(SetOfLists);
    }
});

InputValue.addEventListener('keypress', (event)=>{
    if(event.key === "Enter"){
        if (Play == false){
            Play = true;
            let SetOfLists = [];
            CombinationNumber = InputValue.value;
            SetOfLists = objectList.AddSixRandomNumber(list1, CombinationNumber);
            
        
            for(let i=0; i<CombinationNumber; i++){
                if (i <10){
                    li = document.createElement("li");
                    li.innerText = SetOfLists[i];
                    document.getElementById("mainList").appendChild(li);
                    Audit.push(SetOfLists[i]);
                    hr = document.createElement("hr");
                    document.getElementById("mainList").appendChild(hr);
                }
                else if (i>=10 && i<20){
                    li = document.createElement("li");
                    li.innerText = SetOfLists[i];
                    document.getElementById("mainList2").appendChild(li);
                    Audit.push(SetOfLists[i]);
                    hr = document.createElement("hr");
                    document.getElementById("mainList2").appendChild(hr);
        
                }
                else if (i>=20 && i<=30){
                    li = document.createElement("li");
                    li.innerText = SetOfLists[i];
                    document.getElementById("mainList3").appendChild(li);
                    Audit.push(SetOfLists[i]);
                    hr = document.createElement("hr");
                    document.getElementById("mainList3").appendChild(hr);
                }
            }
            list1 = objectList.ClearList();
            console.log(SetOfLists);
        } else {
            list1 = objectList.ClearListButton();
            let SetOfLists = [];
            CombinationNumber = InputValue.value;
            SetOfLists = objectList.AddSixRandomNumber(list1, CombinationNumber);
            
        
            for(let i=0; i<CombinationNumber; i++){
                if (i <10){
                    li = document.createElement("li");
                    li.innerText = SetOfLists[i];
                    document.getElementById("mainList").appendChild(li);
                    Audit.push(SetOfLists[i]);
                    hr = document.createElement("hr");
                    document.getElementById("mainList").appendChild(hr);
                }
                else if (i>=10 && i<20){
                    li = document.createElement("li");
                    li.innerText = SetOfLists[i];
                    document.getElementById("mainList2").appendChild(li);
                    Audit.push(SetOfLists[i]);
                    hr = document.createElement("hr");
                    document.getElementById("mainList2").appendChild(hr);
        
                }
                else if (i>=20 && i<=30){
                    li = document.createElement("li");
                    li.innerText = SetOfLists[i];
                    document.getElementById("mainList3").appendChild(li);
                    Audit.push(SetOfLists[i]);
                    hr = document.createElement("hr");
                    document.getElementById("mainList3").appendChild(hr);
                }
            }
            list1 = objectList.ClearList();
            console.log(SetOfLists);
        }
    }
})

clearButton.addEventListener('click', ()=> {
    objectList.ClearListButton();
    objectList.ClearInputField();
});
