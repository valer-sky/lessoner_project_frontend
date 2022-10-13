const backend_URL: string = 'https://lessoner.herokuapp.com/en';

const isEmailExists = async (email: string): Promise<boolean> => {
    const res = await fetch(`${backend_URL}/check_email?email=${email}`);

    if (!res.ok) {
        throw new Error(`Error code ${res.status}`);
    }
    return (await res.json()).email_exists
}

export { isEmailExists };