using InternHyperlogy.common.Helper;
using InternHyperlogy.common.ViewModels;
using InternHyperlogy.Common.DTO;
using InternHyperlogy.Common.Helper;
using InternHyperlogy.Common.Req;
using InternHyperlogy.model.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.DAL.Repository
{
    public class PropertyRepository : IPropertyRepository
    {
        private readonly Mapper _mapper;
        private readonly ManagerPropertyContext _context;
        private readonly MyHelper _myHelper;

        public PropertyRepository()
        {
            _context = new ManagerPropertyContext();
            _mapper = new Mapper();
            _myHelper = new MyHelper();
        }

        public PropertyDTO AddProperty(PropertyReq property)
        {
            string IdConvert = _myHelper.GenerateKey(property.IdProperty);

            if (_context.Properties.FirstOrDefault(x => x.IdProperty == IdConvert) != null) return null;
            Property newProperty = new Property();

            newProperty.IdProperty = IdConvert;
            newProperty.NameProperty = property.NameProperty;
            newProperty.Amount = property.Amount;
            newProperty.TimeCreate = DateTime.Now;

            _context.Properties.Add(newProperty);
            _context.SaveChanges();
            return _mapper.MapPropertyToDTO(newProperty);
        }

        public IEnumerable<PropertiesStaffViewModel> GetDetailProperty(string idPro)
        {
            var response = from property in _context.Properties
                           join staff in _context.Staff on property.IdStaff equals              staff.IdStaff into propertyStaff
                           from ps in propertyStaff.DefaultIfEmpty()
                           where (property.IdProperty.ToLower().Equals(idPro.ToLower()))
                           select new PropertiesStaffViewModel
                           {
                               Property = property,
                               Staff = ps
                           };
            return response.ToList();
        }

        public InfoPageViewModel GetListPropertyPagnition(int page, int size, string name = "")
        {
            // lấy giữa liệu nhưng chưa phân trang
            var query = from property in _context.Properties
                           join staff in _context.Staff on property.IdStaff equals                staff.IdStaff into propertyStaff
                           from ps in propertyStaff.DefaultIfEmpty()
                           where (name == null || property.NameProperty.ToLower().Contains(name.ToLower()) || (ps != null && ps.FullName.ToLower().Contains(name.ToLower())))
                           select new PropertiesStaffViewModel
                           {
                               Property = property,
                               Staff = ps
                           };
            // tính toán số trang
            int totalItems = query.Count();
            int totalPage = _myHelper.CountPagesItems(size, totalItems);

            // phân dữ liệu
            var pagedQuery = query.Skip((page - 1) * size).Take(size);
            InfoPageViewModel infoPage = new InfoPageViewModel();

            infoPage.pageSize = size;
            infoPage.totalItem = totalItems;
            infoPage.currentPage= page;
            infoPage.totalPage = totalPage;
            infoPage.data = pagedQuery;
            return infoPage;
        }

        

        public PropertyDTO GetPropertyById(string id)
        {
            return _mapper.MapPropertyToDTO(_context.Properties.FirstOrDefault(x => x.IdProperty == id));
        }

        public StaffDTO GetStaffById(string id)
        {
            return _mapper.MapStaffToDTO(_context.Staff.FirstOrDefault(x => x.IdStaff == id));
        }

        public void RemoveProperty(string id)
        {
            Property taiSanDelete = _context.Properties.FirstOrDefault(x => x.IdProperty == id);
            _context.Properties.Remove(taiSanDelete);
            _context.SaveChanges();
        }

        public PropertyDTO UpdateProperty(PropertyReq property)
        {
            Property propertyUpdate = _context.Properties.FirstOrDefault(x => x.IdProperty == property.IdProperty);

            if (propertyUpdate == null)
            {
                return null;
            }
            propertyUpdate.NameProperty = property.NameProperty;
            propertyUpdate.Amount = property.Amount;
            propertyUpdate.TimeUpdate = DateTime.Now;
            _context.SaveChanges();

            return _mapper.MapPropertyToDTO(propertyUpdate);
        }
    }
}
