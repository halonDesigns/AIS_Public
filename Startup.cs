using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AIS_Public.Startup))]
namespace AIS_Public
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
