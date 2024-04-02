import os
import webview


def get_entrypoint():
    def exists(path):
        return os.path.exists(os.path.join(os.path.dirname(__file__), path))

    dist_path = "./dist/index.html"
    if exists(dist_path):  # unfrozen development
        return dist_path


index_page = get_entrypoint()


def main():
    webview.create_window(
        "Login",
        index_page,
        width=800,
        height=600,
        resizable=False,
        frameless=True,
    )
    webview.start(http_server=True)


if __name__ == "__main__":
    main()
