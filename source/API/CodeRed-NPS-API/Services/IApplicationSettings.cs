using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.WindowsAzure.Storage.Blob.Protocol;

namespace CodeRed.NPS.API.Services
{
    public interface IApplicationSettings
    {
        string EndPointUrl { get; }
        string PrimaryKey { get; }
    }
}
