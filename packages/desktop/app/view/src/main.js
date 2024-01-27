-$(function() {
  const login_button = $("#login");

  login_button.on("click", async () => {
    const username = $("#username").val();
    const password = $("#password").val();

    try {
      const result = await pywebview.api.checkCredentials(username, password);

      if (result.status === "success") {
        pywebview.api.openHomepage(result.id);
      } else {
        console.log(result.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
});
