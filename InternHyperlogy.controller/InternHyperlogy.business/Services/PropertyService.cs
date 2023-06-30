using BE_API_Common.Validation;
using InternHyperlogy.common.Req;
using InternHyperlogy.Common.Req;
using InternHyperlogy.DAL.Repository;
using InternHyperlogy.Rsp;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.business.Services
{
    public class PropertyService : IPropertyService
    {
        IPropertyRepository _propertyRepository;
        
        public PropertyService(IPropertyRepository propertyRepository) {
            _propertyRepository = propertyRepository;
        }   
        public Response Add(PropertyReq property)
        {
            var res = new Response();
            var validate = new Validate();
            validate.ValidateProperty(property);

            if (validate.Result == false)
            {
                res.SetError("400", validate.TypeErr, validate.Message);
                return res;
            }

            var actionAdd = _propertyRepository.AddProperty(property);
            if (actionAdd == null)
            {
                res.SetError("400","ID_PROPERTY", "Mã tài sản này đã tồn tại !");
                return res;
            }

            res.SetMessage("Thêm tài sản thành công");
            res.SetData("201", actionAdd);
            return res;
        }

        public Response Delete(string id)
        {
            var res = new Response();
            var propertyDelete = _propertyRepository.GetPropertyById(id);
            if (propertyDelete == null)
            {
                res.SetError("400","ID_PROPERTY", "Tài sản này không tồn tại !");
                return res;
            }

            if (propertyDelete.IdStaff != null)
            {
                res.SetError("400","ID_STAFF","Tài sản này đã có người sở hữu !");
                return res;
            }
            _propertyRepository.RemoveProperty(id);
            res.Code = "200";
            res.SetMessage("Xóa tài sản thành công !");
            return res;
        }

        public Response GetById(string id)
        {
            var res = new Response();
            if (id == null)
            {
                res.SetError("400","ID_PROPERTY", "Id không hợp lệ !");
                return res;
            }
            var property = _propertyRepository.GetDetailProperty(id);
            if (property.Count() == 0)
            {
                res.SetError("404", "ID_PROPERTY", "Không tìm thấy thông tin tài sản này !");
                return res;
            }

            res.SetData("200" ,property);
            res.SetMessage("Tìm thấy tài sản thành công !");
            return res;
        }

        public Response Pagination(SearchReq searchReq)
        {
            var res = new Response();
            // xử lí logic
            int pageSize = searchReq.size == null || searchReq.size < -1 ? 10 : searchReq.size;
            int pageNumber = searchReq.page == null || searchReq.page < -1 ? 1 : searchReq.page;
            var list = _propertyRepository.GetListPropertyPagnition(pageNumber, pageSize, searchReq.searchName);
            res.SetData("200",list);
            return res;
        }

        public Response Update(PropertyReq pro)
        {
            var res = new Response();
            var validate = new Validate();

            validate.ValidateProperty(pro);

            if (validate.Result == false)
            {
                res.SetError("400", validate.TypeErr,validate.Message);
                return res;
            }

            var tsUpdate = _propertyRepository.UpdateProperty(pro);
            if (tsUpdate == null)
            {
                res.SetError("404","ID_PROPERTY", "Mã tài sản không tồn tại !");
                return res;
            }

            res.SetMessage("Sửa tài sản thành công !");
            res.SetData("201", tsUpdate);
            return res;
        }
    }
}
