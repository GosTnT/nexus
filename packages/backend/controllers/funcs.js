export async function login_fetch(Username,Password) {
    try {
        const res = await fetch(`http://127.0.0.1:80/user/login/${Username}/${Password}`, {
            method: 'POST',
            mode: 'no-cors',
        });
        if (res.ok) {
            const data = (await res.text());
            return data;
        } else {
            return "Error logging";
        }
    } catch (error) {
        return "Error logging data";
    }
}
export async function register_fetch(Username,Password) {
    try {
        const res = await fetch(`http://127.0.0.1:80/user/register/${Username}/${Password}`, {
            method: 'POST',
        });
        if (res.ok) {
            const data = (await res.text());
            return data;
        } else {
            return "Error registering";
        }
    } catch (error) {
        return "Error resgistering user";
    }
}
