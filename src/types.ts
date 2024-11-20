export type BaseProps<T extends React.ElementType> = React.ComponentPropsWithoutRef<T>

export type EmailComponent<T extends BaseProps<any>> = React.FC<Readonly<T>>

// https://help.mindbox.ru/docs/как-вывести-специальные-ссылки-веб-версия-отписка-название-рассылки
export enum Mindbox {
	MAILING_UTM = '${Message.MailingUtmName}',
	ACCESSIBILITY = '${Message.AccessibilityLink}',
	SENDING_DATE = '${Message.SendingDateTime}',
	UNSUBSCRIBE = '${Message.UnsubscribeLink}',
	TOPIC_UNSUBSCRIBE = '${Message.TopicUnsubscribeLink}'
}
