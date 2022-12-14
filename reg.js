document.getElementById('btn').addEventListener('click',function(e){
  e.preventDefault()
  var details={
FullName:'',
EmailID:'',
phnno:''

  }
  details.FullName=document.getElementById('fname').value
  details.EmailID=document.getElementById('email').value
  details.phnno=document.getElementById('phn').value
  buildresume(details)
})
function buildresume(details){
  document.getElementById('name').innerHTML=details.FullName
  document.getElementById('em').innerHTML=details.EmailID
  document.getElementById('ph').innerHTML=details.phnno

  document.getElementById('div').style.visibility='visible'
}