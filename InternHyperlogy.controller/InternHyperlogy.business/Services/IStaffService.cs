using InternHyperlogy.Common.Req;
using InternHyperlogy.Rsp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.business.Services
{
    public interface IStaffService
    {
        Response Pagination(int? page, int? size, string? name);
        Response GetById(string id);
        Response AddStaff(StaffReq nv);
        Response AssignProperty(string idStaff, string idProperty);
    }
}
