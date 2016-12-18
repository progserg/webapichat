namespace Chat.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using Chat.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<Chat.Models.ChatContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Chat.Models.ChatContext context)
        {
            context.Messages.AddOrUpdate(x => x.Id,
            new Message() { Name = "serg", Time = DateTime.Now },
            new Message() { Name = "vasya", Time = DateTime.Now }
         );
        }
    }
}
