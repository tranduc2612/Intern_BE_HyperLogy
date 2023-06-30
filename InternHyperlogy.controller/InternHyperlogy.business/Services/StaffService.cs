using BE_API_Common.Validation;
using InternHyperlogy.Common.DTO;
using InternHyperlogy.Common.Req;
using InternHyperlogy.DAL.Repository;
using InternHyperlogy.Rsp;

namespace InternHyperlogy.business.Services
{
    public class StaffService : IStaffService
    {
        IStaffRepository _staffRepository;
        IPropertyRepository _propertyRepository;
        public StaffService(IStaffRepository staffRepository, IPropertyRepository propertyRepository)
        {
            _staffRepository = staffRepository;
            _propertyRepository = propertyRepository;
        }
        public Response AddStaff(StaffReq nv)
        {
            var res = new Response();
            //xu li logic
            var validateStaff = new Validate();
            validateStaff.ValidateStaff(nv);

            if (!validateStaff.Result)
            {
                res.SetError("400", validateStaff.TypeErr, validateStaff.Message);
                return res;
            }

            StaffDTO newStaff = _staffRepository.Add(nv);
            if (newStaff == null)
            {
                res.SetError("400", "ID_STAFF", "Mã nhân viên này đã tồn tại !");
                return res;
            }

            res.SetMessage("Tạo tài sản thành công !");
            res.SetData("201", newStaff);

            return res;
        }

        public Response AssignProperty(string idStaff, string idProperty)
        {
            var res = new Response();
            StaffDTO staff = _staffRepository.GetById(idStaff);
            if (staff == null)
            {
                res.SetError("400", "Nhân viên không tồn tại !");
                return res;
            }
            PropertyDTO ts = _propertyRepository.GetPropertyById(idProperty);
            if (ts == null)
            {
                res.SetError("400", "Tài sản không tồn tại !");
                return res;
            }
            else if (ts.IdStaff == idStaff)
            {
                res.SetError("400", "Bạn đang sở hữu tài sản này !");
                return res;
            }
            else if (ts.IdStaff != null)
            {
                res.SetError("400", "Tài sản đã có người sở hữu !");
                return res;
            }


            _staffRepository.AssignProperty(idStaff, idProperty);
            res.Code = "201";
            res.SetMessage("Gán tài sản thành công !");
            return res;
        }

        public Response GetById(string id)
        {
            var res = new Response();
            if (id == null)
            {
                res.SetError("400","ID_STAFF","Id nhân viên không hợp lệ !");
                return res;
            }

            var staff = _staffRepository.GetById(id);
            if (staff == null)
            {
                res.SetData("200", new { });
                res.SetMessage("Không tìm thấy thông tin nhân viên này !");
                return res;
            }
            var lstProperties = _staffRepository.GetPropertiesById(id);
            res.SetData("200", new { staffInfo = staff, properties = lstProperties });
            res.SetMessage("Tìm thấy nhân viên thành công !");
            return res;
        }

        public Response Pagination(int? page, int? size, string? name)
        {
            var res = new Response();
            int pageSize = size == null || size < -1 ? 10 : size.Value;
            int pageNumber = page == null || page < -1 ? 1 : page.Value;
            var lstStaff = _staffRepository.Pagination(pageNumber, pageSize, name);
          
            if (lstStaff.Count == 0)
            {
                res.SetMessage("Không tìm thấy nhân viên !");
            }
            else
            {
                res.SetMessage("Tìm thấy nhân viên !");
            }

            res.SetData("200", lstStaff);
            return res;
        }
    }
}
