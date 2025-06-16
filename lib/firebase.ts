import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfisg = {
  "type": "service_account",
  "project_id": "mybmsap",
  "private_key_id": "afe3efa4532c2f19432d484389e59db11d0f5b60",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDX5nlg+Qh8ExLm\ngQikgS131DYponJGoHC/YNnEhmnCt6ZQ+I7putYwElHVAhH0q3FPptBiwvSACyKz\nf39w5fn4V5pxElZ32gnIJg/Cg0VJnHoLFD31hT3pXsoc3+jrFdu+uftK3ZIvbQoB\ntRVH05kolgRLMP9w2De9JFrFo+OW/ATcpmwGf+KjxoJrkrJLqJ7x7yRCdRIhFEWv\nkL/PkRBMvwGXWEhicbHtxdz5DkEZMMFWeSyD2FdHa8sdRYp4bf+ACdo4XTSTbw0m\nvfafqPH2zjCf8Jr+URXaGKpx0hroU2GyhxlXAvXzwGq8emYF/nKgdGSXonjuswlG\n3D7zbz8dAgMBAAECggEAF6tz6TbEQF4S92R0HxzucDG60mu13ZpfYgvrNAmMdMWP\nnVbyzBsoulJ32EOG1m0pWhMuy3UWOyd9YXJ79VOxSRHJo9Xf1vn3kpLhrXCY2w4l\nrytD87Ps6rXysKG3tnZKBin7q+SIz1xD+ZXxxFMlenaf9+JiTuvViI4AyaRDIl1B\nLV5sydPFdVKFrMzU2ubqWErtn+xN+RJdeF72GqUkUIUIczzW+DLB58XWQ7FF+W7L\nTbNjPORttbKe8EfVkfrQdJSSSmhy/8AEnu4mRI6WnBJxLFy7LatNT1exLELlXloE\naRFBhREhU/gs82qWXMh2l5hsD0JXGIlMy+Edr0QffQKBgQD/X/TJSVh8xHKSOixm\n5EtwRuzE9SM/unQ3BHPLtWQkz4Q1ffP4swjkkroZOKBLuva3mNqQVEAe0X1jYJ46\noBLTXOlSOb7lRCv6rhrDDuuo88PEkQhLBwkMN0zZrQ8sAca/ym4D9pdihCQh+2RN\nULYFK9w5M05d/I58SJyrY948nwKBgQDYbcd4nZDjNvE1TaLOY2rR2FIUPEFmdwC8\nurQdIEuG/VeNM/YZ2ORl8GpKBX8bt1hVL9wS29dDiXrxKh3JRy/Lo0A18KAKiXr/\naUDta7mlIIEz++JzJ2ZuO0GEmAIL9zXYxgMdWKE4Zfj1yXnL6ao3y3603OvN4g9E\nlkikVC2uwwKBgQD3yb2Uyawoc9zPcc6/j2h7avY2Lb2kCmDVOWa6FCk1Zn1cAfiG\nKgHI923HJyCyGpllj9UTEgydWpuVn5woOkXJ/G8QL6PAhaM+u0yQU5vp9YzQ4ADx\n+8OVrNrOo5MDGj4kvmB9S/mbx6ffqTOrqVLUNbibb+LsYzBF+5a43lA29QKBgQCc\nv31tfOjXtw4hZdYZFmXiD4L6xt0zAdNV3P7f7WjmHowPZ2fBNpXMwr+oVqzFfReL\nsvr36aLRdjvFeJRUF6ulF9pEdr7igsnDPA7bJV8yGgWZib9rWUjVYzNDffhVhDjK\nhDbzRSKWvzv9f2sn5Vbzy/07rplV5njaWuHHqnPfkwKBgBchsHq0jPT/3iOG1pTU\nu80p1qU0d9bZ2lpXiMW6omeCJxvzHGr5lXd3jxB2o4fSSgVGDUb3EcvjYAFQIpWw\nra+KURRDkt3UFWFRdFOolHdgPFUKM/mxDFJZ40PC5yDczxfrm/4iHFFQzMA8/gNQ\nnNJFFh2DsN8S0V4u72P4D38w\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-labm8@mybmsap.iam.gserviceaccount.com",
  "client_id": "104845864390331807565",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-labm8%40mybmsap.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};
const firebaseConfig = {
  apiKey: "afe3efa4532c2f19432d484389e59db11d0f5b60",
  authDomain: "mybmsap.firebaseapp.com",
  projectId: "mybmsap",
  storageBucket: "mybmsap.firebase.com",
  messagingSenderId: "1003812842407",
  appId: "mybms",
}
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);