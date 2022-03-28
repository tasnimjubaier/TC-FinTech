
export const getBody = (clientName, link) => {
    return "Dear Customer, You have a new onboarding request from " + clientName + ". Please click on the " + link + " to start onboarding yourself"
}

var mailSender = {
  sendEmail(subject, to, body) {
    /* SmtpJS.com - v3.0.0 */
    let Email = {
      send: function (a) {
        return new Promise(function (n, e) {
          a.nocache = Math.floor(1e6 * Math.random() + 1)
          a.Action = "Send"
          var t = JSON.stringify(a);
          Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
            n(e);
          });
        });
      },
      ajaxPost: function (e, n, t) {
        var a = Email.createCORSRequest("POST", e);
        a.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        a.onload = function () {
            var e = a.responseText;
            null != t && t(e);
        }
        a.send(n);
      },
      ajax: function (e, n) {
        var t = Email.createCORSRequest("GET", e)
        t.onload = function () {
          var e = t.responseText;
          null != n && n(e);
        }
          t.send();
      },
      createCORSRequest: function (e, n) {
        var t = new XMLHttpRequest();
        return (
          "withCredentials" in t
            ? t.open(e, n, !0)
            : "undefined" != typeof XDomainRequest
            ? (t = new window.XDomainRequest()).open(e, n)
            : (t = null),
          t
        );
      }
    };

    Email.send({
      SecureToken: "2365fbf2-8941-4414-9053-bbb5d38f5f83", // write your secure token
      To: to, // to include multiple emails you need to mention an array
      From: "tasnimjubaier@gmail.com",
      Subject: subject,
      Body: body,
    }).then((message) => {
        console.log("message sent " + message)
      alert(message);
    });
  },
};

export default mailSender;
