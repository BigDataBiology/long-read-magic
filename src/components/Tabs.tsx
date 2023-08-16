import React, { useState, ReactNode } from 'react'

interface TabsProps {
  children: ReactNode
}

const Tabs = ({ children }: TabsProps) => {
  // recuperation du premier label dans le children
  const firstLabel = (
    React.Children.toArray(children)[0] as React.ReactElement<TabProps>
  ).props.label
  const [activeTab, setActiveTab] = useState<string>(firstLabel)

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    newActiveTab: string
  ) => {
    e.preventDefault()
    setActiveTab(newActiveTab)
  }

  return (
    <div>
      <div className="flex flex-wrap justify-around text-center text-sm font-medium md:pb-16">
        {React.Children.map(children, (child) => {
          const tabChild = child as React.ReactElement<TabProps>
          return (
            <button
              aria-label={`button tools ${tabChild.props.label}`}
              key={tabChild.props.label}
              className={`${
                activeTab === tabChild.props.label
                  ? 'border-b-2 border-white text-2xl text-textColor-yellowlight'
                  : ''
              } inline-block rounded-t-lg border-b-2 border-transparent p-4 text-sm text-white hover:border-textColor-blue hover:text-textColor-blue lg:text-2xl`}
              onClick={(e) => handleClick(e, tabChild.props.label)}
            >
              {tabChild.props.label}
            </button>
          )
        })}
      </div>
      <div className="py-6">
        {React.Children.map(children, (child) => {
          const tabChild = child as React.ReactElement<TabProps>
          if (tabChild.props.label === activeTab) {
            return (
              <div key={tabChild.props.label}>{tabChild.props.children}</div>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

interface TabProps {
  label: string
  children: ReactNode
}

export const Tab = ({ label, children }: TabProps) => {
  return (
    <div data-label={label} className="hidden">
      {children}
    </div>
  )
}

export default Tabs