import { approveInvention, denyInvention } from "@/utils/actions";
import DenyInvention from "./DenyInvention";

const ApproveInvention = async ({ invention }) => {
  const {
    id,
    isApproved,
    description,
    creationDate,
    imagePath,
    nameOfInvention,
    nameOfInventor,
    userId,
  } = invention;
  const newId = async () => {
    return await invention.id;
  };
  const inventionId = await newId();
  console.log(inventionId);

  return (
    <div className="border-2 p-8 border-primary bg-primary text-white rounded-lg w-[500px] mx-auto mb-40">
      <h3 className="capitalize text-2xl my-8">
        <p className="font-bold text-neutral text-center text-4xl">
          {invention.nameOfInvention}
        </p>
      </h3>
      <h3 className="capitalize text-2xl my-8">
        <p className="font-bold text-neutral">Inventor: </p>
        {invention.nameOfInventor}
      </h3>

      <p className="text-2xl mb-2 font-bold text-neutral">
        Invention Description:
      </p>
      <p className="text-2xl mb-8">{invention.description}</p>
      <h3 className="text-2xl my-8">
        <p className="font-bold text-neutral">UserID:</p>{" "}
        <p className="break-words">{invention.userId}</p>
      </h3>
      <div className="flex justify-around">
        <form action={approveInvention}>
          <input type="hidden" name="id" defaultValue={inventionId} />
          <button
            type="submit"
            id="isApproved"
            name="isApproved"
            className="btn bg-neutral text-primary border-primary text-2xl hover:bg-primary hover:text-secondary"
          >
            Approve
          </button>
        </form>
        <DenyInvention id={invention?.id} />
      </div>
    </div>
  );
};
export default ApproveInvention;
