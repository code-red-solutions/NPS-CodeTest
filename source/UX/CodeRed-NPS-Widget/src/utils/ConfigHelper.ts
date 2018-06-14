export class ConfigHelper {

  static get nps_Service_API_URL(): string {
    return 'http://localhost:7071/api/';
    // return 'https://code-red-npp.azurewebsites.net/api/';
  }

  static get nps_Service_API_Route_feedback(): string {
    return 'NPSSubmission';
  }

}
