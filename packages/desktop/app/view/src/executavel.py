import sys
import os
import webview


# sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../..")))

from model.db_connection import check_credentials  # noqa E402


def get_entrypoint():
    def exists(path):
        return os.path.exists(os.path.join(os.path.dirname(__file__), path))

    if exists("../../../dist/login.html"):  # unfrozen development
        return "../../../dist/login.html"


home_page = get_entrypoint()


class WindowController:
    def __init__(self):
        self.login_window = None
        self.home_window = None

    def checkCredentials(self, username, password):
        result = check_credentials(username, password)

        if result["status"] == "success":
            self.openHomepage(username)
            if self.login_window:
                self.login_window.destroy()

        return result

    def openHomepage(self, BoosterID):
        if self.home_window:
            self.home_window.destroy()
        self.home_window = webview.create_window(
            "Hello",
            "./homepage.html",
            js_api=self,
            width=800,
            height=600,
            resizable=False,
            frameless=True,
        )

    def closeWindow(self):
        self.login_window.destroy()


controller = WindowController()


def main():
    controller.login_window = webview.create_window(
        "Login",
        home_page,
        js_api=controller,
        width=800,
        height=600,
        resizable=False,
        frameless=True,
    )
    webview.start(http_server=True, debug=True)


if __name__ == "__main__":
    main()
