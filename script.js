var State_Name=document.querySelector("#State_Name");
var County_Name=document.querySelector("#County_Name");
var Affiant_Personal_Title=document.querySelector("#Affiant_Personal_Title");
var Affiant_Name=document.querySelector("#Affiant_Name");
var Affiant_Address=document.querySelector("#Affiant_Address");
var Affiant_City=document.querySelector("#Affiant_City");
var Affiant_State=document.querySelector("#Affiant_State");
var Affiant_Zip_Code=document.querySelector("#Affiant_Zip_Code");
var pdfPreview=document.getElementById("pdf");
var Decedent_Personal_Title=document.querySelector("#Decedent_Personal_Title");
var Decedent_Full_Legal_Name=document.querySelector("#Decedent_Full_Legal_Name");
var Decedent_Place_of_Death=document.querySelector("#Decedent_Place_of_Death");
var Decedent_Date_of_Death=document.querySelector("#Decedent_Date_of_Death");
var Decedent_Address=document.querySelector("#Decedent_Address");
var Decedent_City=document.querySelector("#Decedent_City");
var Decedent_State=document.querySelector("#Decedent_State");
var Decedent_Zip_Code=document.querySelector("#Decedent_Zip_Code");
var steps=Array.from(document.querySelectorAll(".step"));
var next_btn=document.querySelector(".button");
var prev_btn=document.querySelector(".active");
// console.log(steps);


//loading pdf
var doc = new jsPDF();
doc.setFontSize(15)
doc.text(20,50,"STATE OF ______________________");
doc.text(20,65,"COUNTRY OF ______________________");
doc.setFontSize(12);
doc.text(20,75,"By signing this affidavit, I______________________________________,residing at");
doc.text(20,82,"________________,___________,______________,__________");
doc.text(20,90,"swear or affirm under penality that the following statements and the contents are true and");
doc.text(20,98,"correct");
doc.setFontSize(15)
doc.text(20,123,"Decendat Name:_______________");
doc.text(20,133,"Date of death:_______________");
doc.text(20,143,"Place of death:_______________");
doc.text(20,153,"here is actual copy of Decendats death certificate");
doc.text(20,163,"The Decedent resided at time of  death at")
doc.text(20,173,"________________,___________,______________,__________")
doc.text(20,183,"The _____________shall have jurisdiction over this matter since the Decendent ")
doc.text(20,193,"stayed within this jurisdiction prior death")
doc.setFontSize(25); 
doc.setFont("helvetica", "bold");
doc.text(55,30,"Affidavit of Small Estate");
doc.setFontSize(20);
doc.setFont("helvetica", "bold");
doc.text(20,110,"Decendt Information");
doc.line(20,113,92,113);
var pdfData = doc.output();
doc.setFont("helvetica", "normal");
var pdfBlob = new Blob([pdfData], {
    type: "application/pdf"
});
var objectURL = URL.createObjectURL(pdfBlob);

pdfPreview.innerHTML = "";
pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";











/////////////////////////////////////////////////////////////
 function main_checking(value){
    var doc_1 = new jsPDF();
    // doc_1.text(20, 20, "Name: ");
    // doc_1.text(20, 30, "Email: ");
    
    doc_1.setFontSize(15)
    if(State_Name.value !=""){
    doc_1.text(20,50,"STATE OF "+`${State_Name.value}`);
    }
    else{
    doc_1.text(20,50,"STATE OF ________________________");
    }

    if(County_Name.value !=""){
        doc_1.text(20,65,"COUNTRY OF   "+`${County_Name.value}`);   
    }
    else{
    doc_1.text(20,65,"COUNTRY OF ______________________");
     }
    doc_1.setFontSize(12);
    if(Affiant_Personal_Title.value !=""){
        if(Affiant_Name.value !="")
        doc_1.text(20,75,`By signing this affidavit, I ${Affiant_Personal_Title.value} ${Affiant_Name.value} residing at`);
        else
        doc_1.text(20,75,`By signing this affidavit, I ${Affiant_Personal_Title.value}_____________________________,residing at`);
    }
    else{
        if(Affiant_Name.value =="" & Affiant_Personal_Title.value =="")
           doc_1.text(20,75,"By signing this affidavit, I______________________________________,residing at");
        // else

    }
    if(Affiant_Name.value !=""){
        if(Affiant_Personal_Title.value !="")
        doc_1.text(20,75,`By signing this affidavit, I ${Affiant_Personal_Title.value} ${Affiant_Name.value}`);
        else
        doc_1.text(20,75,`By signing this affidavit, I ____${Affiant_Name.value}`);
    }else{
        if(Affiant_Name.value =="" & Affiant_Personal_Title.value =="")
        doc_1.text(20,75,"By signing this affidavit, I______________________________________,residing at");
    }
    if(Affiant_Address.value !=""){
        doc_1.text(20,82,`${Affiant_Address.value}`);
    }
    else{
 

   }
   if(Affiant_City.value !=""){
    doc_1.text(20,82,`${Affiant_Address.value},${Affiant_City.value}`);
   }
   else{
    // doc_1.text(20,82,`${Affiant_Address.value},___________,______________,__________`);


   }
   if(Affiant_State.value !=""){
    doc_1.text(20,82,`${Affiant_Address.value},${Affiant_City.value},${Affiant_State.value}`);
   }
   else{
    // doc_1.text(20,82,`${Affiant_Address.value},${Affiant_City.value},______________,`);
   }
   if(Affiant_Zip_Code.value !=""){
    doc_1.text(20,82,`${Affiant_Address.value},${Affiant_City.value},${Affiant_State.value},${Affiant_Zip_Code.value}`);
   }
    doc_1.text(20,90,"swear or affirm under penality that the following statements and the contents are true and");
    doc_1.text(20,98,"correct");
    // doc_1.setFontSize(20);
    // doc_1.setFont("helvetica", "bold");
    // doc_1.text(20,110,"Decendt Information");
    
    doc_1.setFontSize(15)
    // doc_1.setFont("helvetica", "bold");
    // ---------------------------------------------------------------------------
    if(Decedent_Personal_Title.value !=""){
        if(Decedent_Full_Legal_Name.value !="")
        doc_1.text(20,123,`Decendat Name:${Decedent_Personal_Title.value}  ${Decedent_Full_Legal_Name.value}`);
        else
        doc_1.text(20,123,`Decendat Name:${Decedent_Personal_Title.value}_________________________`);
    }
    else{
        if(Decedent_Personal_Title.value =="" & Decedent_Full_Legal_Name.value =="")
        doc_1.text(20,123,"Decendat Name:_______________");
        // else

    }
    if(Decedent_Full_Legal_Name.value !=""){
        if(Decedent_Personal_Title.value !="")
        doc_1.text(20,123,`Decendat Name:${Decedent_Personal_Title.value}  ${Decedent_Full_Legal_Name.value}`);
        else
        doc_1.text(20,123,`Decendat Name:____ ${Decedent_Full_Legal_Name.value}`);
    }else{
        if(Decedent_Full_Legal_Name.value =="" & Decedent_Personal_Title.value =="")
        doc_1.text(20,123,"Decendat Name:_______________");
    }
    // doc_1.text(20,123,"Decendat Name:_______________");
    if(Decedent_Date_of_Death.value !=""){
        doc_1.text(20,133,`Date of death: ${Decedent_Date_of_Death.value}`);
    }
    else{
    doc_1.text(20,133,"Date of death:_______________");
    }
    if(Decedent_Place_of_Death.value !=""){
        doc_1.text(20,143,`Place of death: ${Decedent_Place_of_Death.value}`);
    }
    else{
        doc_1.text(20,143,`Place of death: _________________________`);  
    }
   
    doc_1.text(20,153,"here is actual copy of Decendats death certificate");

    if(Decedent_Address.value !=""){
        doc_1.text(20,163,`${Decedent_Address.value}`)
    }else{

    }
    if(Decedent_City.value !=""){
        doc_1.text(20,163,`${Decedent_Address.value},${Decedent_City.value}`)
    }else{

    }
    if(Decedent_State.value !=""){
        doc_1.text(20,163,`${Decedent_Address.value},${Decedent_City.value},${Decedent_State.value}`)
    }
    else{

    }
    if(Decedent_Zip_Code.value !=""){
        doc_1.text(20,163,`${Decedent_Address.value},${Decedent_City.value},${Decedent_State.value},${Decedent_Zip_Code.value}`)
    }
    
    if(Decedent_Address.value =="" & Decedent_City.value =="" & Decedent_State.value =="" & Decedent_Zip_Code.value==""){
        doc_1.text(20,163,"________________,___________,______________,__________")
    }

    doc_1.text(20,173,"The _____________shall have jurisdiction over this matter since the Decendent ")
    doc_1.text(20,183,"stayed within this jurisdiction prior death")
    doc_1.setFontSize(25);
    doc_1.setFont("helvetica", "bold");
    doc_1.text(55,30,"Affidavit of Small Estate");
    doc_1.setFontSize(20);
    doc_1.setFont("helvetica", "bold");
    doc_1.text(20,110,"Decendt Information");
    doc_1.line(20,113,92,113);
    doc_1.setFont("helvetica", "normal");
    doc_1.setFontSize(15)
    // doc_1.text(60,65,`${County_Name.value}`);
    var pdfData = doc_1.output();
    
    var pdfBlob = new Blob([pdfData], {
        type: "application/pdf"
    });
    var objectURL = URL.createObjectURL(pdfBlob);
    
    pdfPreview.innerHTML = "";
    pdfPreview.innerHTML = "<embed src='" + objectURL + "' type='application/pdf' width='100%' height='300px'>";
 }
let step_number=1;
 next_btn.addEventListener("click",function(e){
    let index=0;
    step_number=step_number+1;
    if(step_number>1){
        // console.log(step_number)
        next_btn.style.left='15%'
        prev_btn.style.display = 'block';
    }
    const current=document.querySelector(".current");
    // console.log(current);
    index=steps.indexOf(current);
    console.log(index);
    if(index==5){
        console.log(step_number)
        next_btn.style.left='5%'
        prev_btn.style.display = 'none';
        steps[index-1].classList.remove('current');
        steps[0].classList.add('current');
    }
    else{
    steps[index].classList.remove('current');
    index++;
    steps[index].classList.add('current');
    }
})
 prev_btn.addEventListener("click",function(e){
    e.preventDefault();
    // console.log("hiiiiiiiiii");
    let index=0;
    step_number=step_number-1;
    if(step_number==1){
        console.log(step_number)
        next_btn.style.left='5%'
        prev_btn.style.display = 'none';
    }
    const current=document.querySelector(".current");
    // console.log(current);
    index=steps.indexOf(current);
    // console.log(index);
    steps[index].classList.remove('current');
    index--;
    steps[index].classList.add('current');
 })
// if(step_number>1){
//     console.log(step_number)
//     next_btn.style.left='15%'
//     prev_btn.style.display = 'block';
// }

State_Name.addEventListener("change",function(e){
    main_checking();
})
County_Name.addEventListener("change",function(e){
    main_checking();
})
Affiant_Personal_Title.addEventListener("change",function(e){
    main_checking();
})
Affiant_Name.addEventListener("change",function(e){
    main_checking();
})
Affiant_City.addEventListener("change",function(){
    main_checking();
})
Affiant_State.addEventListener("change",function(){
    main_checking();
})
Affiant_Zip_Code.addEventListener("change",function(){
    main_checking();
})
Affiant_Address.addEventListener("change",function(e){
    main_checking();
})

Decedent_Personal_Title.addEventListener("change",function(e){
    main_checking();
})

Decedent_Full_Legal_Name.addEventListener("change",function(e){
    main_checking();
})
Decedent_Date_of_Death.addEventListener("change",function(e){
    main_checking();
})

Decedent_Place_of_Death.addEventListener("change",function(e){
    main_checking();
})
Decedent_Address.addEventListener("change",function(e){
    main_checking();
})
Decedent_City.addEventListener("change",function(e){
    main_checking();
})
Decedent_State.addEventListener("change",function(e){
    main_checking();
})
Decedent_Zip_Code.addEventListener("change",function(e){
    main_checking();
})