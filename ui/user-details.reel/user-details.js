/**
 * @module ui/user-details.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class UserDetails
 * @extends Component
 */
exports.UserDetails = Component.specialize(/** @lends UserDetails# */ {
    constructor: {
        value: function UserDetails() {
            this.super();
        }
    },
    
    handleNextButtonAction: {
        value: function() {
            this.ownerComponent.parentComponent.switchValue = "user-friends";
        }
    }
});
