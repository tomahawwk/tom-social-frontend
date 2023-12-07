import Chat from "@/components/Chat";
import ChatsList from "@/components/ChatsList";
import BaseLayout from "@/components/layout/BaseLayout";

const ChatsPage = () => {
  return (
    <BaseLayout>
      <div className="grid grid-cols-[325px_1fr] h-full">
        <div className="bg-grey-500 border-r border-border">
          <div>
            1
          </div>
          <ChatsList  />
        </div>
        <div>
          <Chat />
        </div>
      </div>
    </BaseLayout>
  )
}

export default ChatsPage;
