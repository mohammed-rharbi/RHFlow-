

export interface Users {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: string;
}

export interface LoginUser{
    
    email: string;
    password: string;
}


export interface Job {
    _id: string;
    title: string;
    description: string;
    companyName: string;
    location: string;
    skills: string[];
    employmentType: string;
    experience: string;
  }