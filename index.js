function myFunction(x) {
    x.classList.toggle("change");
  }
  
  function getPlanetImage() {
    var poaImage = document.createElement("poa.gif");
    poaImage.setAttribute("width", "320");
    poaImage.setAttribute("height", "228")
    document.body.appendChild(poaImage);
  }
   $('#form_id').submit(function swal (e, params) {
        var localParams = params || {};

        if (!localParams.send) {
            e.preventDefault();
        }

           //additional input validations can be done hear

    swal({
                title: "Confirm Entry",
                text: "Are you sure all entries are correct",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#6A9944",
                confirmButtonText: "Confirm",
                cancelButtonText: "Cancel",
                closeOnConfirm: true
            }, function (isConfirm) {
                if (isConfirm) {
                    $(e.currentTarget).trigger(e.type, { 'send': true });
                } else {

              //additional run on cancel  functions can be done hear

            }
        });
});

// var acc = document.getElementsByClassName("accordion");
// var i;
// console.log(acc)

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }