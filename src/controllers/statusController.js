const {
    Status,
    Checkpoints,
    DetailsChecklist,
    ChecklistTypes,
} = require("../models");

exports.getStatus = async (req, res, next) => {
    try {
        const { checkpointsId } = req.params;

        const status = await Status.findAll({
            where: { checkpointsId },
            attributes: { exclude: ["checkpointsId", "detailsChecklistId"] },
            include: [{ model: Checkpoints }, DetailsChecklist],
        });

        res.status(200).json(status);
    } catch (err) {
        next(err);
    }
};
