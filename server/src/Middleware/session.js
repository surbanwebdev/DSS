const { getRequestSessionGuid, isAdmin, manageSession } = require('../Logic/session');

module.exports = {
    requireValidSession: ((req, res, next) => {
        let sessionGuid = getRequestSessionGuid(req);
        if (!sessionGuid) {
            res.statusMessage = "Not logged in"
            res.status(401).end();
            return;
        }

        manageSession(req, res).then(() => {
            next();
        }).catch((err) => {
            res.statusMessage = err;
            res.status(500).end();
            return;
        });
    }),
    requireAdmin: ((req, res, next) => {
        let sessionGuid = getRequestSessionGuid(req);
        isAdmin(sessionGuid).then((isUserAdmin)=>{
            if (!isUserAdmin) {
                res.statusMessage = "Insufficient permission"
                res.status(403).end();
                return;
            }
            next();
        });
    })
}