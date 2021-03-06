/** Database key */
const {privateKey} = JSON.parse(process.env.FIREBASE_KEY_PRIVATE_KEY ?? '{"privateKey": ""}');
const key = {
    type: "service_account",
    project_id: process.env.FIREBASE_PROJECT_ID!,
    private_key_id: process.env.FIREBASE_KEY_PRIVATE_ID!,
    private_key: privateKey,
    client_email: process.env.FIREBASE_CLIENT_EMAIL!,
    client_id: process.env.FIREBASE_CLIENT_ID!,
    auth_uri: "https://accounts.google.com/o/oauth2/auth",
    token_uri: "https://oauth2.googleapis.com/token",
    auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
    client_x509_cert_url: process.env.FIREBASE_X509_CERT_URL!
   }
   export {key}