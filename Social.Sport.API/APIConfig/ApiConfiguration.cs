namespace Social.Sport.API.APIConfig
{
    public static class ApiConfiguration
    {
        public static IApplicationBuilder ConfigureCorsPolicy(this IApplicationBuilder app)
        {
            return app.UseCors(x => x
            .WithOrigins("http://localhost:3000", "https://localhost:3000")
            .AllowAnyMethod()
            .AllowAnyHeader()
            .AllowCredentials());
        }
    }
}
