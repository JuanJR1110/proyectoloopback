export class User {
  public username!:String
  public email!:String
  public password!:String
  setdatos(data:any){
    this.username=data.username
    this.email=data.email
    this.password=data.password

  }

}
