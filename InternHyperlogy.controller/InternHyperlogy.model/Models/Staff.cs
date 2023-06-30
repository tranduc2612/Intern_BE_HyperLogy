using System;
using System.Collections.Generic;

namespace InternHyperlogy.model.Models;

public partial class Staff
{
    public string IdStaff { get; set; } = null!;

    public string? FullName { get; set; }

    public string? CitizenIdentification { get; set; }

    public string? Email { get; set; }

    public string? PhoneNumber { get; set; }
}
