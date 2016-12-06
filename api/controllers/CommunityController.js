/**
 * CommunityController
 *
 * @description :: Server-side logic for managing communities
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    //destroy: function (req, res) {
    //    var id = req.param('id');
    //    if (!id) {
    //        return res.badRequest('No id passed.');
    //    }
    //    Community.update(id, {isEnabled: false}).exec(function (err, user) {
    //        if (err) {
    //            res.serverError(err);
    //        }
    //        return res.jsonx(user);
    //    });
    //},
    find: function (req, res) {
        Community.find().exec(function (err, users) {
            if (err) {
                return res.serverError(err);
            }
            return res.jsonx(users);
        });
    },
    update: function (req, res) {
        if (!req.body) {
            return res.badRequest('No body data passed.');
        }

        var id = req.param('id');

        if (!id) {
            return res.badRequest('No id passed.');
        }

        Community.update(id, req.body).exec(function (err, user) {
            if (err) {
                return res.serverError(err);
            }

            return res.jsonx(user);
        });
    },
    delete: function (req, res) {
        Community.Remove({ id: req.params.community_id }, function(err) {
            if (!err) {
                return res.send('User deleted!');
            } else {
                return res.send('Error deleting user!');
            }
        });
    }
};

