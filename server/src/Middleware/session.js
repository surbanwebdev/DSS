const _ = require('lodash');
const { getRequestSessionGuid, isAdmin, manageSession } = require('../Logic/session');


module.exports = {
    requireLogIn: (async (req,res,next)=>{
        let sessionGuid = getRequestSessionGuid(req);
        if (!sessionGuid){
            res.statusMessage = "Not logged in"
            res.status(401).end();
            return;
        }

        manageSession(req, res).then(()=>{
            next();
        }).catch((err)=>{
            res.statusMessage = err;
            res.status(500).end();
            return;
        });
    }),
    requireAdmin: (async (req,res,next)=>{
        this.requireLogIn(req,res,(async ()=>{
            let sessionGuid = getRequestSessionGuid(req);
            let isUserAdmin = await isAdmin(sessionGuid);
            if (!isUserAdmin()){
                res.statusMessage = "Insufficient permission"
                res.status(403).end();
                return;
            }
            next();
        }))

    })
}