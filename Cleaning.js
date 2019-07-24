var triggle = 0;

function Random(){
    var number = ['강윤수', '김나연', '김진주', '김효경', '나연경','남도희','박혜정','박희경','서지인','유란주',
    '윤지원','이규빈','이서주', '이세하', '이유진','정은주','주미림','진세린','최민성'];
    
    if(triggle == 0){
        // 겹치지 않는 18가지
        for(var i=0; i<19; i++){
            var random = Math.floor(Math.random()*19);
            if(number[random] != null){
                // 여기다 적어
                var output = number[random] + ' ';
                var cla = "clean"+Math.floor(i/3+1);
                console.log(cla);
                document.getElementById(cla).innerHTML += output;
                console.log(number[random] + ' : ' + Math.floor(i/3+1));
                number[random] = null;
            }else {
                i--;
                continue;
            }
        }
        triggle = 1;
    }

    return false;
}