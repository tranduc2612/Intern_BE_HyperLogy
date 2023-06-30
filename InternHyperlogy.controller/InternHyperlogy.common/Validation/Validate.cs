
using InternHyperlogy.Common.Req;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace BE_API_Common.Validation
{
    public class Validate
    {
        string message;
        bool result;
        string typeErr;
        public Validate() { }

        public string Message { get => message; set => message = value; }
        public bool Result { get => result; set => result = value; }
        public string TypeErr { get => typeErr; set => typeErr = value; }

        public void ValidateProperty(PropertyReq input)
        {
            string regexId = @"^TS\d+$";
            string regexName = @"^[\p{L}0-9\s]+$";
            string regexSL = @"^[1-9]\d*$";

            if (!Regex.IsMatch(input.IdProperty, regexId))
            {
                this.typeErr = "ID_PROPERTY";
                this.message = "Mã tài sản phải bắt đầu bằng TS + mã số !";
                this.result = false;
                return;
            }
            else
            {
                string subRegex = @"^.{1,10}$";
                if(!Regex.IsMatch(input.IdProperty, subRegex))
                {
                    this.typeErr = "ID_PROPERTY";
                    this.message = "Mã tài sản không được vượt quá 10 kí tự !";
                    this.result = false;
                    return;
                }
            }

            if(input.NameProperty == "")
            {
                this.typeErr = "NAME_PROPERTY";
                this.message = "Tên tài sản không được để trống !";
                this.result = false;
                return;
            }
            else if (!Regex.IsMatch(input.NameProperty, regexName))
            {
                this.typeErr = "NAME_PROPERTY";
                this.message = "Tên tài sản không được chứa kí tự đặc biệt !";
                this.result = false;
                return;
            }
            else
            {
                string subRegex = @"^.{1,40}$";
                if (!Regex.IsMatch(input.NameProperty, subRegex))
                {
                    this.typeErr = "NAME_PROPERTY";
                    this.message = "Tên tài sản không được vượt quá 40 kí tự !";
                    this.result = false;
                    return;
                }
            }

            string slConvert = (input.Amount).ToString();

            if (!Regex.IsMatch(slConvert, regexSL))
            {
                this.typeErr = "AMOUNT_PROPERTY";
                this.message = "Số lượng phải là số và phải lớn hơn 0 !";
                this.result = false;
                return;
            }
            this.typeErr = "";
            this.message = "Tài sản hợp lệ !";
            this.result = true;
            return;
        }
    
        public void ValidateStaff(StaffReq input)
        {
            string regexStrId = @"^NV\d+$";
            string regexStrCmnd = @"^\d{1,12}$";
            string regexStrEmail = @"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";

            if (!Regex.IsMatch(input.IdStaff, regexStrId))
            {
                this.typeErr = "ID_STAFF";
                this.message = "Mã nhân viên phải bắt đầu bằng NV + mã số !";
                this.result = false;
                return;
            }
            else
            {
                string subRegex = @"^.{1,10}$";
                if (!Regex.IsMatch(input.IdStaff, subRegex))
                {
                    this.typeErr = "ID_STAFF";
                    this.message = "Mã nhân viên không được vượt quá 10 kí tự !";
                    this.result = false;
                    return;
                }
            }


            if (input.CitizenIdentification == "")
            {
                this.typeErr = "IDENTIFY_STAFF";
                this.message = "Trường CMND này không được để trống !";
                this.result = false;
                return;
            }
            else if (!Regex.IsMatch(input.CitizenIdentification, regexStrCmnd))
            {
                this.typeErr = "IDENTIFY_STAFF";
                this.message = "CMND phải nhỏ hơn 12 ký tự và chỉ cho phép nhập số !";
                this.result = false;
                return;
            }

            if(input.Email == "")
            {
                this.typeErr = "EMAIL_STAFF";
                this.message = "Trường Email này không được để trống !";
                this.result = false;
                return;
            }else if (!Regex.IsMatch(input.Email, regexStrEmail))
            {
                this.typeErr = "EMAIL_STAFF";
                this.message = "Trường Email phải nhập đúng định dạng !";
                this.result = false;
                return;
            }
            this.typeErr = "";
            this.message = "Dữ liệu hợp lệ !";
            this.result = true;
            return;
        }
    }
}
