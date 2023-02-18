import { v4 as uuidv4 } from "uuid";
import mongoose, { model, models, Schema } from "mongoose";

URI = `mongodb+srv://marc:${process.env.MONGODB_PASSWORD}@cluster0.3jst9iw.mongodb.net/?retryWrites=true&w=majority`;

const projectSchema = new Schema({
  name: String,
  id: String,
  description: String,
  image: String,
  views: [
    { name: String, description: String },
    {
      material: [
        {
          name: String,
          material: String,
          width: Number,
          height: Number,
          depth: Number,
          pieces: Number,
        },
      ],
    },
  ],
  material: [
    {
      name: String,
      material: String,
      width: Number,
      height: Number,
      depth: Number,
      pieces: Number,
    },
  ],
});

const Project = models.Project || model("Project", projectSchema);

async function connectDatabase() {
  await mongoose.connect(URI);
}

async function getAllProjects() {
  await connectDatabase();

  const projects = await Project.find({});

  return projects;
}
async function getProject(id) {
  await connectDatabase();
  const project = await Project.findOne({ id });
  return project;
}

async function createProject(project) {
  await connectDatabase();

  const createdProject = await Project.create({
    ...project,
    id: uuidv4(),
  });
  return createdProject;
}

async function deleteProject(id) {
  await connectDatabase();
  const deletedProject = getProject(id);
  await Project.deleteOne({ id });
  return deletedProject;
}

async function updateProject(id, project) {
  await connectDatabase();

  await Project.updateOne({ id }, project);

  const updatedProject = getProject(id);

  return updatedProject;
}

export { getAllProjects, updateProject, deleteProject, createProject };
