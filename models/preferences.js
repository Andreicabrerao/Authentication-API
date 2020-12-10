document.cookie;

$(document).ready(function () {
  $("#preferencesSubmit").click(function () {
    $.ajax({
      url: "http://localhost:3000/users/preferences",
      type: "post",
      dataType: "json",
      data: {
        emailId: $("#emailId").innerText(),
        sports: $("#sports").val(),
        cars: $("#cars").val(),
        javscript: $("#javascript").val(),
      },
    });
  });
});
