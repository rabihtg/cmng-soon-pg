const emailInput = $("#userEmail");
const invalidEmailText = $(".invalid-email-txt");
const validEmailRegx =
  /(^[a-zA-Z0-9]{1,}([!#$%&'*+-/=_`?^{|.][a-zA-Z0-9]{1,})*?)+@([a-zA-Z0-9]([-.][a-zA-z0-9])*){1,}\.[a-zA-z]{2,3}$/g;

$("#submitEmail").click((e) => {
  validateEmail(e);
});

function validateEmail(e) {
  e.preventDefault();

  const userValue = emailInput.val();
  if (
    !userValue.match(validEmailRegx) ||
    userValue.split("@")[0].length > 64 ||
    userValue.split("@")[1].split(".")[0] > 253
  ) {
    inplaceValidator();
    invalidEmailText.removeAttr("hidden");
    emailInput.attr("aria-invalid", true);
  } else {
    invalidEmailText.attr("hidden", true);
    emailInput.attr("aria-invalid", false);
  }
}

function inplaceValidator() {
  $("#userEmail").on("input", () => {
    const userValue = emailInput.val();
    if (
      !(
        !userValue.match(validEmailRegx) ||
        userValue.split("@")[0].length > 64 ||
        userValue.split("@")[1].split(".")[0] > 253
      )
    ) {
      invalidEmailText.attr("hidden", true);
      emailInput.attr("aria-invalid", false);
      $("#userEmail").off();
    }
  });
}
