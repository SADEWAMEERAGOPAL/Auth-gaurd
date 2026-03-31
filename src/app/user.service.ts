import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  BaseUrl: string=environment.BaseUrl;
  UserUrl: string=`${this.BaseUrl}/users.json`;


  constructor(private _http:HttpClient) { }


fetchAlluser():Observable<any>{
  return this._http.get(this.UserUrl).pipe(
    map((obj:any)=>{
      let userArr=[]
      for(let key in obj){
        userArr.push({...obj[key], id:key})
      }
      return userArr
    })
  )
}

fetchsingle(id: string):Observable<any>{
  let getUrl: string= `${this.BaseUrl}/users/${id}.json`
  return this._http.get(getUrl)

}


CreateUrl(userObj:any):Observable<any>{
  return this._http.post(this.UserUrl, userObj)
}


UpdateUrl(Upuser: any):Observable<any>{
  let updateurl: string= `${this.BaseUrl}/users/${Upuser.id}.json`
  return this._http.patch(updateurl, Upuser)
}

Deeleteurl(id: string): Observable<any>{
  let deleteUrl: string=`${this.BaseUrl}/users/${id}.json`
  return this._http.delete(deleteUrl)
}

//  {
//         userName: "Kiran Pandey",
//         userId: "131",
//         userRole: "Manager",
//         profileDescription: "Project manager handling multiple web projects.",
//         profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizPVODquL9YnaosfI-jL8A8atNiky00_Maw&s",
//         skills: ["Project Management", "Agile", "Scrum"],
//         experienceYears: "2 to 3 Years Experience",
//         isActive: true,
//         address: {
//             current: {
//                 city: "Delhi",
//                 state: "Delhi",
//                 country: "India",
//                 zipcode: "110001"
//             },
//             permanent: {
//                 city: "Jaipur",
//                 state: "Rajasthan",
//                 country: "India",
//                 zipcode: "302001"
//             }
//         }
    // },
    // {
    //     userName: "Neha Mane",
    //     userId: "132",
    //     userRole: "Candidate",
    //     profileDescription: "QA engineer experienced in manual and automation testing.",
    //     profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTbKKhH9dSn7E0cXM-WUHRCAgDbHsMUfpeQ&s",
    //     skills: ["Selenium", "Manual Testing", "API Testing"],
    //     experienceYears: "2 to 3 Years Experience",
    //     isActive: false,
    //     address: {
    //         current: {
    //             city: "Chennai",
    //             state: "Tamil Nadu",
    //             country: "India",
    //             zipcode: "600001"
    //         },
    //         permanent: {
    //             city: "Madurai",
    //             state: "Tamil Nadu",
    //             country: "India",
    //             zipcode: "625001"
    //         }
    //     }
    // },
}