let verifyTitle = false;
let verifyCon = false;
let verifyPhoto = false;
let verifyOption = false;
let verifyContactDt = false;


/*
window.onload = function(){
    if(selectedFile){
        const fileInput1 = document.getElementById('file1');
        fileInput.files = [selectedFile];

    }
}
*/



function previewFile() {
    const fileInput = document.getElementById('photo_select');


    const reader = new FileReader();
    const previewPhoto = document.querySelectorAll('.selected_photobox_img');

    let count = 0;

    reader.readAsDataURL(fileInput.files[0]);
    reader.onload = function(e) {

        if(document.querySelectorAll('.selected_photobox_img.active').length != previewPhoto.length){

            previewPhoto.forEach((item, index) => {

                let isActive = item.getAttribute('class').indexOf('active')
                // active 클래스가 있는지 확인

                if(isActive == -1) {
                    //active 클래스가 없으면

                    if(count == 0) {

                        item.classList.add('active')
                        item.querySelector('img').src = e.target.result
                        count += 1

                    }
                    else {
                        return
                    }
                }
            })
        }else{
            alert ('이미지는 5개까지 입력가능합니다.');
        }

    }
}

function photoDelete(){
    const previewPhoto = document.querySelectorAll('.selected_photobox_img');

    previewPhoto.forEach(item => {
        item.querySelector('img').src = 'img/selected_photo.png';
        item.classList.remove('active');
    })

}

function validateTitle(){

    var title = document.getElementById('portTitle').value;
    var regex = /^.{1,30}$/;
    var msg = "";

    if(regex.test(title)){
        verifyTitle = true;
        return msg;
    }
    else{
        if(title.length > 30){
            msg = "제목은 30자를 넘을 수 없습니다.";
            // alert(msg);
        }
        verifyTitle = false;
        return msg;

    }
}

function validateCon(){
    var con = document.getElementById('portCon').value;
    var regex = /^.{1,2000}$/;
    var msg = "";

    if(regex.test(con)){
        verifyCon = true;
        return msg;
    }else{
        if(con.length > 2000)
        {
            msg = "내용은 2000자를 넘을 수 없습니다.";
            // alert(msg);
        }

        verifyCon = false;
        return msg;
    }

}

function validatePhoto(){
    var ExistImages = document.querySelectorAll("img.small_photo[src^='/thumbPath']").length; //기존에 입력한 파일이 있는지
    var file1 = document.getElementById('file1').files.length;      //새로 입력한 파일이 있는지
    var file2 = document.getElementById('file2').files.length;      //새로 입력한 파일이 있는지
    var file3 = document.getElementById('file3').files.length;      //새로 입력한 파일이 있는지
    var file4 = document.getElementById('file4').files.length;      //새로 입력한 파일이 있는지


    if(ExistImages > 0 || file1 > 0 || file2 > 0 || file3 > 0 || file4 > 0){        // 기존에 입력한 파일이 있거나, 새로 입력한 파일이 있으면
        console.log("ExistImages > 0 || file1 > 0 || file2 > 0 || file3 > 0 || file4 > 0 : " + ExistImages > 0 || file1 > 0 || file2 > 0 || file3 > 0 || file4 > 0);
        verifyPhoto = true;
        return true;
    }else{
        console.log("ExistImages > 0 : " + ExistImages > 0 );
        console.log("file1 > 0 : " + file1 > 0);
        console.log("file2 > 0 : " + file2 > 0);
        console.log("file3 > 0 : " + file3 > 0);
        console.log("file4 > 0 : " + file4 > 0);

        verifyPhoto = false;            //기존에 입력한 파일도 없고(삭제), 새로 입력한 파일도 없으면
        return false;
    }

}

function validateContactDt(){
    var contactDt = document.getElementById('portContactDt').value;
    var regex = /^.{1,100}$/;
    var msg = "";

    if(regex.test(contactDt)){
        verifyContactDt = true;
        return msg;
    }
    else{
        if(contactDt.length > 100)
        {
            msg = "연락 가능 시간은 100자를 넘을 수 없습니다.";
            // alert(msg);
        }
        else if(contactDt.trim() == ""){
            msg = "연락 가능 시간을 입력해 주세요.";
            // alert(msg);
        }
        verifyContactDt = false;
        return msg;
    }
}

function validateMemberInfo(){
    var memberInfo = document.getElementById('memberInfo').value;
    var regex = /^.{0,1000}$/;
    var msg = "";

    if(regex.test(memberInfo)){
        verifymemberInfo = true;
        return msg;
    }
    else{
        if(memberInfo.length > 1000){
            msg = "판매자 소개는 1000자를 넘을 수 없습니다.";
            alert(msg);
        }
        verifymemberInfo = false;
        return msg;
    }
}


function validateOption(){
    var optionPrice1 = document.getElementById('optionPrice1').value;
    var optionInfo1 = document.getElementById('optionInfo1').value;
    var optionFix1 = document.getElementById('optionFix1').value;
    var optionDt1 = document.getElementById('optionDt1').value;
    var optionPrice2 = document.getElementById('optionPrice2').value;
    var optionInfo2 = document.getElementById('optionInfo2').value;
    var optionFix2 = document.getElementById('optionFix2').value;
    var optionDt2 = document.getElementById('optionDt2').value;
    var optionPrice3 = document.getElementById('optionPrice3').value;
    var optionInfo3 = document.getElementById('optionInfo3').value;
    var optionFix3 = document.getElementById('optionFix3').value;
    var optionDt3 = document.getElementById('optionDt3').value;

    //각 필드의 유효성 검사를 수행
    var isValid = "";


    // 첫번째 옵션
    if(optionPrice1==null || optionPrice1.length < 1){        //옵션 가격이 있는지
        isValid = "옵션1: 가격을 입력해 주세요.";
    }
    else if(optionInfo1==null || optionInfo1.length < 1){     //옵션 설명이 있는지
        isValid = "옵션1 : 설명을 입력해 주세요.";
    }
    else if(!validateInput(optionInfo1)){                   //옵션 설명이 유효성에 맞는지
        isValid = "옵션1: 옵션 설명은 한글, 영어, 숫자만 입력 가능합니다.(최대 100자)";
    }
    else if(optionFix1==null || optionFix1.length < 1){       // 옵션 수정횟수가 있는지
        isValid = "옵션1: 수정 횟수를 입력해 주세요.";
    }
    else if(optionDt1==null || optionDt1.length < 1){        //옵션 소요 날짜가 있는지
        isValid = "옵션1: 작업 소요 날짜를 입력해 주세요.";
    }
        /* -----------------------------------------------------------------------------*/
    // 두번째 옵션
    else if(optionPrice2==null || optionPrice2.length < 1){        //옵션 가격이 있는지
        isValid = "옵션2: 가격을 입력해 주세요.";
    }
    else if(optionInfo2==null || optionInfo2.length < 1){     //옵션 설명이 있는지
        isValid = "옵션2 : 설명을 입력해 주세요.";
    }else if(!validateInput(optionInfo2)){                   //옵션 설명이 유효성에 맞는지
        isValid = "옵션2: 옵션 설명은 한글, 영어, 숫자만 입력 가능합니다.(최대 100자)";
    }else if(optionFix2==null || optionFix2.length < 1){       // 옵션 수정횟수가 있는지
        isValid = "옵션2: 수정 횟수를 입력해 주세요.";
    }else if(optionDt2==null || optionDt2.length < 1){          //옵션 소요 날짜가 있는지
        isValid = "옵션2: 작업 소요 날짜를 입력해 주세요.";
    }
        /* -----------------------------------------------------------------------------*/
    // 세번쨰 옵션
    else if(optionPrice3==null || optionPrice3.length < 1){        //옵션 가격이 있는지
        isValid = "옵션3: 가격을 입력해 주세요.";
    }
    else if(optionInfo3==null || optionInfo3.length < 1){     //옵션 설명이 있는지
        isValid = "옵션3 : 설명을 입력해 주세요.";
    }else if(!validateInput(optionInfo3)){                   //옵션 설명이 유효성에 맞는지
        isValid = "옵션3: 옵션 설명은 한글, 영어, 숫자만 입력 가능합니다.(최대 100자)";
    }else if(optionFix3==null || optionFix3.length < 1){       // 옵션 수정횟수가 있는지
        isValid = "옵션3: 수정 횟수를 입력해 주세요.";
    }else if(optionDt3==null || optionDt3.length < 1){          //옵션 소요 날짜가 있는지
        isValid = "옵션3: 작업 소요 날짜를 입력해 주세요.";
    }


    return isValid;

}

function validateInput(value){
    var regex = /^.{1,100}$/;
    return regex.test(value);
}


setInterval(checkAll, 1000); // 1초에 한 번씩 checkAll 함수를 실행



function checkAll(){



    if(verifyTitle && verifyCon && verifyPhoto && (validateOption().trim()==="") && verifyContactDt ){

        // $("#portfolioRegist").prop('disabled',false);
        $("#portfolioRegist").css('background-color', '');

    }else {

        // $("#portfolioRegist").prop('disabled', true);
        $("#portfolioRegist").css('background-color', 'gray');
    }

    if(verifyTitle && verifyCon && verifyPhoto && (validateOption().trim()==="") && verifyContactDt ){
        $("#portfolioUpdate").css('background-color', '');
    }
    else{
        $("#portfolioRegist").css('background-color', 'gray');
    }


}

function validateForm(){
    var errorMessage = ""; //에러 메시지를 저장할 변수

    //제목 필드 검사
    var title = document.getElementById("portTitle").value;
    var con = document.getElementById("portCon").value;
    var file1 = document.getElementById('file1').files[0];
    var file2 = document.getElementById('file2').files[0];
    var file3 = document.getElementById('file3').files[0];
    var file4 = document.getElementById('file4').files[0];
    var option = validateOption();
    var contactDt = document.getElementById('portContactDt').value;
    var ExistImages = document.querySelectorAll("img.small_photo[src^='/thumbPath']").length; //기존에 입력한 파일이 있는지
    var file1 = document.getElementById('file1').files.length;      //새로 입력한 파일이 있는지
    var file2 = document.getElementById('file2').files.length;      //새로 입력한 파일이 있는지
    var file3 = document.getElementById('file3').files.length;      //새로 입력한 파일이 있는지
    var file4 = document.getElementById('file4').files.length;

    if(title.trim() === "") {           //제목이 비어있는 경우
        errorMessage += "제목을 입력해 주세요\n";
    }
    else if(validateTitle() != ""){
        errorMessage += validateTitle();
    }

    else if(con.trim() === "") {        //내용이 비어있는 경우
        errorMessage += "내용을 입력해 주세요\n";
    }

    else if(validateCon() != ""){
        errorMessage += validateCon();
    }

    else if(validatePhoto()==false){        //사진이 1장도 첨부되지 않는 경우

        console.log("ExistImages > 0 : " + ExistImages > 0 );
        console.log("file1 > 0 : " + file1 > 0);
        console.log("file2 > 0 : " + file2 > 0);
        console.log("file3 > 0 : " + file3 > 0);
        console.log("file4 > 0 : " + file4 > 0);

        errorMessage += "사진은 최소 1장 이상 등록하여야 합니다.";

    }

    else if(option != ""){               //옵션 오류 메시지가 하나라도 있는 경우
        errorMessage += option;
    }
    else if(validateContactDt() != ""){
        errorMessage += validateContactDt();
    }


    if(errorMessage === ""){
        return true;
    }
    else{
        alert(errorMessage);
        return false;
    }

}