﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Chat.Models;

namespace Chat.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Chat(string name)
        {
            /*if (name == "")
            {
                name = "Гость" + Session.SessionID;
            }

            ChatDTO user = new ChatDTO();
            user.CurrentUser = name;*/

            return View("Chat");
        }
    }
}
