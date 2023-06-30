using InternHyperlogy.business.Services;
using InternHyperlogy.Common.Req;
using InternHyperlogy.Rsp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace InternHyperlogy.controller.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffController : ControllerBase
    {
        private readonly IStaffService _staffService;
        public StaffController(IStaffService staffService)
        {
            _staffService = staffService;
        }

        [HttpPost]
        public Response ListStaffs(int? page, int? size, string? nameNv)
        {
            try
            {
                return _staffService.Pagination(page, size, nameNv);
            }
            catch (Exception ex)
            {
                var resErr = new Response();
                resErr.SetError(ex.Message);
                return resErr;
            }
        }

        [HttpGet("{idStaff}")]
        public Response GetStaffById(string idStaff)
        {
            try
            {
                return _staffService.GetById(idStaff);
            }
            catch (Exception ex)
            {
                var resErr = new Response();
                resErr.SetError(ex.Message);
                return resErr;
            }
        }


        [HttpPost("Add")]
        public Response AddStaff(StaffReq nvRequest)
        {
            try
            {
                return _staffService.AddStaff(nvRequest);
            }
            catch (Exception ex)
            {
                var resErr = new Response();
                resErr.SetError(ex.Message);
                return resErr;
            }
        }

        [HttpPost]
        [Route("AssignProperty")]
        public Response AssignProperty(string idNv, string idTs)
        {
            try
            {
                return _staffService.AssignProperty(idNv, idTs);
            }
            catch (Exception ex)
            {
                var resErr = new Response();
                resErr.SetError(ex.Message);
                return resErr;
            }
        }

    }
}
