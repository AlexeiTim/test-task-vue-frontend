import { CHECK_URL } from "../constants/api";
import { makeRequest } from "../utils/makeRequest";

class EmailService {
  async validateEmail(email: string) {
    try {
      return await makeRequest({ url: `${CHECK_URL}&email=${email}`, method: 'get' }).then(({ data }) => {
        return (data.response.smtp_code === 250 ? true : false);
      })
    } catch (error) {
      throw new Error('ERROR')
    }

  }
}

export default new EmailService();