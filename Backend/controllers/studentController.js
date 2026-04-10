import Student from "../models/Student.js";

// ADD STUDENT
export const addStudent = async (req, res) => {
  try {
    const { name, className, totalFee } = req.body;

    const months = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];

    const fees = months.map((m) => ({
      month: m,
      paid: 0,
    }));

    const student = new Student({
      name,
      className,
      totalFee,
      fees,
    });

    await student.save();
    res.status(201).json(student);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET ALL
export const getStudents = async (req, res) => {
  const students = await Student.find().sort({ createdAt: -1 });
  res.json(students);
};

// UPDATE FEE
export const updateFee = async (req, res) => {
  try {
    const { studentId, month, amount } = req.body;

    const student = await Student.findById(studentId);
    const feeMonth = student.fees.find((f) => f.month === month);

    if (feeMonth) {
      feeMonth.paid += Number(amount);
    }

    await student.save();

    res.json({ message: "Fee Updated" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};