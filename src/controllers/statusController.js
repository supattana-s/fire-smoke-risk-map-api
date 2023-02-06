const { Op } = require("sequelize");
const { Status, Checkpoints, DetailsChecklist } = require("../models");

exports.getAllStatus = async (req, res, next) => {
    try {
        const allStatus = await Status.findAll();

        res.status(200).json({ allStatus });
    } catch (err) {
        next(err);
    }
};

exports.getStatusById = async (req, res, next) => {
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

exports.updateStatus = (req, res, next) => {
    const { updatingStatus } = req.body;

    updatingStatus.map(async (item) => {
        try {
            await Status.update(
                { status: item.value },
                {
                    where: { id: item.statusId },
                }
            );
        } catch (err) {
            next(err);
        }
    });

    res.status(200).json({ message: "update completed" });
};
