using InternHyperlogy.common.ViewModels;
using InternHyperlogy.Common.DTO;
using InternHyperlogy.Common.Req;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.DAL.Repository
{
    public interface IPropertyRepository
    {
        public InfoPageViewModel GetListPropertyPagnition(int page,int size,string name);

        public IEnumerable<PropertiesStaffViewModel> GetDetailProperty(string idPro);

        public PropertyDTO GetPropertyById(string id);

        public PropertyDTO AddProperty(PropertyReq property);

        public void RemoveProperty(string id);

        public PropertyDTO UpdateProperty(PropertyReq property);

        public StaffDTO GetStaffById(string id);
    }
}
