using InternHyperlogy.Common.DTO;
using InternHyperlogy.Common.Req;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.DAL.Repository
{
    public interface IStaffRepository
    {
        public StaffDTO Add(StaffReq staff);
        public List<StaffDTO> Pagination(int page, int size, string name);
        public StaffDTO GetById(string id);
        public List<PropertyDTO> GetPropertiesById(string idStaff);
        public void AssignProperty(string idStaff, string idProperty);
    }
}
