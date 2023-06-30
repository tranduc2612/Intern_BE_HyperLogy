using InternHyperlogy.common.Helper;
using InternHyperlogy.Common.DTO;
using InternHyperlogy.Common.Helper;
using InternHyperlogy.Common.Req;
using InternHyperlogy.model.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InternHyperlogy.DAL.Repository
{
    public class StaffRepository : IStaffRepository
    {
        public readonly ManagerPropertyContext _context;
        private readonly Mapper _mapper;
        private readonly MyHelper _myHelper;

        public StaffRepository()
        {
            _context = new ManagerPropertyContext();
            _mapper = new Mapper();
            _myHelper = new MyHelper();
        }


        public StaffDTO Add(StaffReq staff)
        {
            string IdConvert = _myHelper.GenerateKey(staff.IdStaff);

            if (_context.Staff.FirstOrDefault(x => x.IdStaff == IdConvert) != null) return null;
            Staff newStaff = new Staff();


            newStaff.IdStaff = IdConvert;
            newStaff.FullName = staff.FullName;
            newStaff.Email = staff.Email;
            newStaff.PhoneNumber = staff.PhoneNumber;
            newStaff.CitizenIdentification = staff.CitizenIdentification;

            _context.Staff.Add(newStaff);
            _context.SaveChanges();
            return _mapper.MapStaffToDTO(newStaff);
        }

        public void AssignProperty(string idStaff, string idProperty)
        {
            _context.Properties.FirstOrDefault(x => x.IdProperty == idProperty).IdStaff = idStaff;
            _context.SaveChanges();
        }

        public StaffDTO GetById(string id)
        {
            return _mapper.MapStaffToDTO(_context.Staff.FirstOrDefault(x => x.IdStaff == id));
        }

        public List<PropertyDTO> GetPropertiesById(string idStaff)
        {
            return _mapper.MapPropertiesToDTOs(_context.Properties.Where(x => x.IdStaff == idStaff).ToList());
        }

        public List<StaffDTO> Pagination(int page, int size, string name = "")
        {
            return _mapper.MapStaffsToDTOs(_context.Staff.Where(x => name == null || x.FullName.ToLower().Contains(name.ToLower())).Skip((page - 1) * size).Take(size).ToList());
        }
    }
}
